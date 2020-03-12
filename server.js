const express = require('express');

const app = express();

var text = '{"success":"true", "id":"1", "name":"ilker"}';

var employees = JSON.parse(text);
 
app.get('/', function (req, res) {
  res.send(employees);
})
 
app.listen(8080);

