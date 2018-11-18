const cluster=require('cluster');
const OS=require('os');
module.exports=(app)=>{
  // cluster.fork()
  //console.log(cluster.isMaster,cluster);
  const core=OS.cpus().length
  for (let i = 0; i < core && cluster.isMaster; i++) {
    cluster.fork();
  }
  if(!cluster.isMaster){
    app.listen(5000, () => console.log(`Listening on port 5000 ${process.pid}`));
  }
cluster.on('error',(error)=>{
  console.log(error);
})
cluster.on('disconnect',(error)=>{
  console.log(`disconnect ${process.pid}`);
})
cluster.on('exit',(error)=>{
  console.log(`Error ${process.pid}`);
})
    app.route("/getGreets").post(function(request,response){
        console.log(request.body);
        response.send({thankyou:"thank you"})
      });
      app.route("/api/hello").get(function(request,response){
        console.log({ express: `Hello From Express ${process.pid}` });
        response.send({ express: `Hello From Express ${process.pid}` })
        process.disconnect();
      });

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
      });

    app.route('/api/hello').get( (req, res) => {
    res.send({ express: `Hello From Express ${process.pid}` });
    });
}