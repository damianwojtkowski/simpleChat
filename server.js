var express = require('express');

var app = express();

var http = require('http').Server(app);
// var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.listen(9876);
console.log('Server is running using port 9876');
