const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');
var mime = require('mime');
const Event = require('events');
let event = new Event();
module.exports = (app) => {
  let create_UUID = () => {
    let time = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = (time + Math.random() * 16) % 6 | 0;
      time = Math.floor(time / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  //app.route("/saveDocument").get(async (request,response)=>{
  //await fs.writeFile(`${__dirname}/public/${request.params.filename}`,request.params.content,(err)=>{
  // console.log("error",err);
  // console.log(request.params);
  // var mimetype = mime.lookup('text.txt');
  // response.setHeader('Content-disposition', 'attachment; filename=' + 'text.txt');
  // response.setHeader('Content-type', mimetype);

  // var filestream = fs.createReadStream(`${__dirname}/public/text.txt`);
  //  filestream.on('data',(data)=>{
  //    console.log(data)

  //   filestream.pipe(response);
  //  });
  //response.download(`${__dirname}/public/text.txt`,`text.txt`);
  // console.log('end');
  // response.attachment(`${__dirname}/public/text.txt`);
  // response.send();
  // response..(request.body.content);
  //})
  // response.download(`${__dirname}/public/text.txt`,'text.txt');
  //});

  app.route("/uploadFile").post((request, res, next) => {
    console.log(request.body.compareCondition);
    condition = request.body.compareCondition.toString().replace(new RegExp(',','g'),' ');
    console.log("ha ha ha ha ha ha ha ah",condition)
    console.log("file1", request.files.file[0]);
    console.log("file2", request.files.file[1]);
    let filename = []
    for (var i = 0; i < 2; i++) {
      let imageFile = request.files.file[i];
      let extend = path.extname(request.files.file[i].name.toString());
      filename.push(`${create_UUID()}${extend}`);
      console.log(filename[0])
      imageFile.mv(`${__dirname}/public/${filename[i]}`, err => {
        if (err) {
          console.log(err);
          event.emit("sendErrorResponse", err);
          throw err;
        }
      });
    }
    let timeout = setTimeout(() => {
      event.emit('sendErrorResponse', "File Format not Supported", res);
      event.emit('doUnlink', filename);
    }, 1500);
    process1 = childProcess.spawn("diff", [condition, `${__dirname}\\public\\${filename[0]}`, `${__dirname}\\public\\${filename[1]}`]);
    process1.stdout.on("data", (data) => {
      clearTimeout(timeout);
      res.send({ thankyou: data.toString('utf8') , error:false });
      event.emit('doUnlink', filename);
    });
    process1.stderr.on("data", (data) => {
      event.emit('sendErrorResponse', data, res);
      event.emit('doUnlink', filename);
      console.log("script error", data.toString('utf8'));
    });
    process1.on("error", (data) => { console.log("process error", data) })
  });

  event.on('doUnlink', (filename) => {
    fs.unlink(`${__dirname}\\public\\${filename[0]}`, () => { console.log(`${filename[0]} removed`) });
    fs.unlink(`${__dirname}\\public\\${filename[1]}`, () => { console.log(`${filename[0]} removed`) });
  });

  event.on('sendErrorResponse', (data, res) => {
    console.log("222222222222222222222222222222222222222222222222222222222222222222222222");
    console.log("data", data.toString('utf8'));
    res.status(500).send({ thankyou: "Sorry !!! File format not supported",error:true });
    res.end();
  });

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
}