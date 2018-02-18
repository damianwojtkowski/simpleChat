var express = require('express');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];
var messages = [];

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

io.on('connection', function (socket) {
  socket.emit('messages', { messages: messages });
  socket.on('login', function (data) {
    users.push(data.login);
    socket.broadcast.emit('users', users);
  });
});

http.listen(9876, function () {
  console.log('Server is running using port 9876');
});
