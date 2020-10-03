"use strict";

const Storage = require("../lib/Storage");

async function getSetting(args) {
    const {data} = args;
    await Storage.load();
    return Storage[data.setting];
}

async function setSetting(args) {
    const {data} = args;
    await Storage.load();
    Storage[data.setting] = data.value;
    return Storage.save();
}

module.exports = {getSetting, setSetting};