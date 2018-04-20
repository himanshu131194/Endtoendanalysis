const express = require('express'),
      app = express();
const bodyParser = require('body-parser');
const secret = require('./config/secret');

app.get('/create-test', (req ,res)=>{
    res.send("New Online Test Platform");
});





app.listen(secret.port, (err)=>{
  if (err) throw err;
    console.log("Server is Running on port " + secret.port);
  }
);