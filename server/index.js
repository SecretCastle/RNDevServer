/**
 * websocket
 */

const WebSocket = require('ws');
const debug = require('debug')('socket');
const socketLog = require('../utils/log').socketLog;

// 创建wss
const wss = new WebSocket.Server({
    port: 9901
});


const msgIncoming = (data) => {
    console.log(data);
}

const connection = (ws, req) => {
    socketLog('websocket connected');
    // 接收数据
    ws.on('message', msgIncoming);
    
    // error
    ws.on('error', () => console.log('客户端下线'));
}

// 链接上
wss.on('connection', connection);

