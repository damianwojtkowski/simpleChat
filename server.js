var express = require('express');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

io.on('connection', function (socket) {
  socket.on('init', function (data) {
    socket.emit('init', users);
    users.push(data.login);
    socket.broadcast.emit('newUser', data.login);
  });
});

http.listen(9876, function () {
  console.log('Server is running using port 9876');
});
