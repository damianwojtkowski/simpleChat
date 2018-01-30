var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(9876);
console.log('Server is running using port 9876');
