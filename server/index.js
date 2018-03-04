/**
 * websocket
 */

const WebSocket = require('ws');
const debug = require('debug')('socket');
const socketLog = require('../utils/log').socketLog;
const Device = require('../utils/device');

// 创建wss
const wss = new WebSocket.Server({
    port: 9901
});

const dataFactory = (data) => {
    const newObj = {};
    if (typeof data !== "object") {
        return data;
    }
    data.forEach(ele => {
        newObj[ele.key] = ele.value;
    });
    return newObj;
}

const msgIncoming = (data, ws) => {
    // 处理数据
    if (typeof data !== 'string') {
        throw new Error('传入值错误');
    }
    const factoriedData = dataFactory(JSON.parse(data));
    Device.SyncDataToDevice(factoriedData, (res) => {
        if (res.meta.code === 0) {
            ws.send(JSON.stringify(res));
        }
    })
}

const connection = (ws, req) => {
    socketLog('websocket connected', ws);
    // 接收数据
    ws.on('message', (data) => { msgIncoming(data, ws) } );
    
    // error
    ws.on('error', () => console.log('客户端下线'));
}

// 链接上
wss.on('connection', connection);

