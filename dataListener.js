var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/deviceData');
var deviceModel = new Schema({
        data: [ { type: Schema.Types.Mixed, required: true} ],
        time: { type: Date, default:Date.now }
        }
);
var app= express();
app.use(bodyParser());
//app.use(bodyParser.json());
var deviceData = mongoose.model('device1', deviceModel);
app.post('/',function(req, res){


    var devicedataat = new deviceData(req.body);
    console.log(req.body);
    devicedataat.save(function (err) {
    if (err)
      console.log(err);
  });
  res.status(200);
  res.end("Successful");

});

app.get('/', function(req, res){
  
})

var port = process.env.PORT || 4000;
app.listen(port);
