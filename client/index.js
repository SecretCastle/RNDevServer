const express = require('express');
const app = express();
const io = require('socket.io')();

app.get('/', (req, res) => {
    const socket = io.connect('http://localhost:6061');
});

app.listen(8080);
