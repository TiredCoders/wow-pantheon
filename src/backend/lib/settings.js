"use strict";

const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const { app } = require('electron');

class Settings {
    constructor() {
        this.conf = {
            wowpath: '',
        };
        this.fileName = null;
    }

    get wowpath() {
        return this.conf.wowpath;
    }

    set wowpath(value) {
        this.conf.wowpath = value;
    }

    load() {
        return new Promise((resolve, reject) => {
            this.fileName = path.join(app.getPath('userData'), 'conf.json');
            //already loaded
            if (this.fileName) {
                return resolve();
            }

            fs.readFile(this.fileName, function (err, data) {
                if (!err) {
                    this.conf = JSON.parse(data);
                    return resolve();
                }
                if (err.code === 'ENOENT') {
                    return resolve();
                }
                reject(err);
            });
        });
    }

    save() {
        return fsPromises.writeFile(this.fileName, JSON.stringify(this.conf));
    }
}


module.exports = new Settings();