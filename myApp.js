var express = require('express');
var app = express();
require('dotenv').config(); // why this library ?

console.log('Hello World');

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip)
    next();
}) // what is middleware ? 

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');

})
app.use(express.static(__dirname + '/public')); // meaning ?

console.log(process.env.MESSAGE_STYLE)

app.get("/json", (req, res) =>{
  if (process.env.MESSAGE_STYLE==='uppercase'){
    res.json({
    "message": "HELLO JSON"
  })
  } else {
    res.json({
      "message": 'Hello json'
    })
  }
    
  
})

module.exports = app;
