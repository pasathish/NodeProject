const express = require('express');
const path = require('path');
var bodyParser=require('body-parser');
const router = require('./router');
const cors = require('cors'); 
const fileUpload = require('express-fileupload')
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(fileUpload())
app.use(cors())
app.use(bodyParser.urlencoded({
  extended : true
}))

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
//   }); 
router(app); 

app.listen(port, () => console.log(`Listening on port ${port}`));

