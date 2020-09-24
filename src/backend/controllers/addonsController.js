"use strict";

const Curseforge = require('../providers/curseforge');
const Game = require('../lib/wow/Game');

async function getInstalled(args) {
    return Game.getAddonsList();
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