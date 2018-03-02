/**
 * log 工具
 */

const debugHttp = require('debug')('http');
const debugSocket = require('debug')('socket');

// http log
const httpLog = (msg) => {
    if (typeof msg === 'string') {
        debugHttp(msg);
    }

    if (typeof msg === 'object') {
        let output = '';
        for (let item in msg) {
            output += `${item}: ${msg[item]} \n`;
        }
        debugHttp(output);
    }

    if (typeof msg === 'array') {
        let output = '';
        msg.forEach(ele => {
            output += `${ele} \n`;
        });
        debugHttp(output);
    }
}

// socket log
const socketLog = (msg) => {
    if (typeof msg === 'string') {
        debugSocket(msg);
    }

    if (typeof msg === 'object') {
        let output = '';
        for (let item in msg) {
            output += `${item}: ${msg[item]} \n`;
        }
        debugSocket(output);
    }

    if (typeof msg === 'array') {
        let output = '';
        msg.forEach(ele => {
            output += `${ele} \n`;
        });
        debugSocket(output);
    }
}

module.exports = {
    httpLog: httpLog,
    socketLog: socketLog
};