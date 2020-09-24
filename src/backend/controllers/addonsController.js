"use strict";

const Curseforge = require('../providers/curseforge');

async function getInstalled(args) {
    console.log('eccoci', args)
    return [{ name: 'gigi', version: '1.3' }, { name: 'poasd', version: '3.1' }];
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