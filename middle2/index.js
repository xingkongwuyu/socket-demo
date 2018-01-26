// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('../..')(server);
var port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
    var url = socket.request.headers.referer;
    //room 根据具体的生成或者添加
    var room=url.split('room_id')[1].substring(1);
    socket.join(room);
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('new message', function (data) {
        io.to(room).emit('receive message',data );
    });
});
