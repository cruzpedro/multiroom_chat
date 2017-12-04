module.exports = function (server) {
    let io = require('socket.io').listen(server);

    io.on('connection', function (socket) {
        socket.on('sendMsg', function (data) {
            socket.emit('msgClient', {nickname: data.nickname, msg: data.msg});
            socket.broadcast.emit('msgClient', {nickname: data.nickname, msg: data.msg});

            if(parseInt(data.updateParticipants) === 0) {
                socket.emit('showParticipants', {nickname: data.nickname});
                socket.broadcast.emit('showParticipants', {nickname: data.nickname});
            }
        });
    });

    return io;
};