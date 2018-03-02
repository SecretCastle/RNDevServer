/**
 * 初始化文件
 */
const express = require('express');
const app = express();
const httpLog = require('./utils/log').httpLog;

// 加载websocket
require('./server');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>WelCome To ReactNative Develop Platform</h1>');
});

app.listen(9090, () => {
    httpLog('server run at: http://localhost:9090');
});

