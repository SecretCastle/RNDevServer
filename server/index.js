/**
 * 初始化文件
 */
const express = require('express');
const app = express();
const debug = require('debug')('http');

// require('./socket/server');
// 启动websocket的中间件
const startWebsocketMiddleware = (req, res, next) => {
    next();
}

app.use(express.static('public'));
app.use(startWebsocketMiddleware);
app.get('/', (req, res) => {
    res.send('./public/index.html');
});

app.listen(9090, () => {
    debug('server run at: http://localhost:9090')
});


