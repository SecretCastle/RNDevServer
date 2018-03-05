const Device = {
    SyncDataToDevice(data, callback) {
        if (data) {
            setTimeout(() => {
                callback({
                    meta: {
                        code: 0,
                        msg: 'success'
                    },
                    data: {
                        time: new Date(),
                        send: data,
                        data: {}
                    }
                });
            }, 1000);
        }
    }
}

module.exports = Device;