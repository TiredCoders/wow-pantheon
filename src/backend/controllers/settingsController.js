"use strict";

const Settings = require("../lib/settings");

async function getSetting(args) {
    const { data } = args;
    await Settings.load();
    return Settings[data.setting];
}

async function setSetting(args) {
    const { data } = args;
    await Settings.load();
    Settings[data.setting] = data.value;
    return Settings.save();
}

module.exports = { getSetting, setSetting };