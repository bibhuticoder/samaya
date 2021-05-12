export default {
    get: (key) => {
        return new Promise((resolve, reject) => {
            if (chrome.storage) {
                console.log("Got from Chrome");
                chrome.storage.sync.get([key], function (result) {
                    if (Object.values(result)[0] != undefined) {
                        resolve(Object.values(result)[0].val);
                    } else {
                        reject();
                    }
                });
            } else {
                let item = localStorage.getItem(key);
                console.log("Got from localstorage", item);
                resolve(item);
            }
        });
    },

    set: (key, value) => {
        return new Promise((resolve, reject) => {
            if (chrome.storage) {
                console.log("Set to Chrome");
                let setObj = {};
                setObj[key] = value;
                chrome.storage.sync.set(setObj, function () {
                    resolve();
                });
            } else {
                localStorage.setItem(key, value)
                console.log("Set to localstorage", value);
                resolve();
            }
        });
    }
}