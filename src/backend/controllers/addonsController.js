"use strict";

const Curseforge = require('../providers/curseforge');
const Game = require('../lib/wow/Game');
const Settings = require("../lib/settings");

async function getInstalled(args) {
    await Settings.load();
    if (!Settings.wowpath) {
        throw new Error("Wow Path not defined");
    }

    const game = new Game(Settings.wowpath, 'retail');
    return game.getAddonsList();
}

async function search(args) {
    const { data } = args;
    let result = [];
    let addons = [];

    try {
        result = await Curseforge.searchAddon(data.name);
    } catch (e) {
        console.error('Search - Provider error', e);
    }

    console.log(result);
    addons = result.map(({ name, dateModified }) => ({
        name: name,
        author: "author 1",
        installedVersion: "1",
        version: "2",
    }));


    return addons;
}

module.exports = { getInstalled, search };