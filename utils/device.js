const Tools = {
    _keys(obj) {
        const hasProperty = Object.prototype.hasOwnProperty;
        const keys = [];
        if (toString.call(obj) !== '[object Object]') {
            return obj;
        }
        for (let item in obj) {
            if (hasProperty.call(obj, item)) {
                keys.push(item);
            }
        }
        return keys;
    }
};


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
                        data: {
                            "dp_key_array": Tools._keys(data),
                            "dp_value": data,
                        }
                    }
                });
            }, 1000);
        }
    }
}


module.exports = Device;