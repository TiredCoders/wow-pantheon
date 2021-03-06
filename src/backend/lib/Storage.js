"use strict";

const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const { app } = require('electron');

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
        for (const addonName in value) {
            this.conf.addons[addonName] = value[addonName];
        }
    }

    getAddonsHasArray() {
        return Object.values(this.conf.addons);
    }

    hasAddons() {
        return Object.keys(this.conf.addons).length > 0;
    }

    addAddon(addon) {
        //todo temporary
        if (this.conf.addons[addon.name]) {
            delete addon.installedVersion;
            delete addon.installedFolders;
            this.conf.addons[addon.name] = { ...this.conf.addons[addon.name], ...addon };
        } else {
            this.conf.addons[addon.name] = addon;
        }
        this.conf.addons[addon.name].installedAt = new Date;
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