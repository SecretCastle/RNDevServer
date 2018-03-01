const Socket = require('socket.io');
const io = new Socket(6061);

console.log('start websocket');

io.on('connection', (socket) => {
    console.log('connect');
})

