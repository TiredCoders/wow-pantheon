"use strict";

const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const {app} = require('electron');

class Storage {
    constructor() {
        this.conf = {
            wowpath: '',
            addons: {},
        };
        this.fileName = null;
    }

    get wowpath() {
        return this.conf.wowpath;
    }

    set wowpath(value) {
        this.conf.wowpath = value;
    }

    get addons() {
        return this.conf.addons;
    }

    set addons(value) {
        value.forEach(addon => {
            this.conf.addons[addon.name] = addon;
        });
    }

    addAddon(addon) {
        this.conf.addons[addon.name] = addon;
    }

    load() {
        return new Promise((resolve, reject) => {
            //already loaded
            if (this.fileName) {
                return resolve();
            }

            this.fileName = path.join(app.getPath('userData'), 'conf.json');

            fs.readFile(this.fileName, (err, data) => {
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


module.exports = new Storage();