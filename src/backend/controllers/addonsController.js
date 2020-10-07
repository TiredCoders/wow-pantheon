"use strict";

const Curseforge = require('../providers/curseforge');
const Parser = require('../providers/parser');
const Game = require('../lib/wow/Game');
const Storage = require("../lib/Storage");
const { download, unzip } = require("../lib/utils");
const fs = require('fs');

async function getInstalled(args) {
    await Storage.load();
    if (!Storage.wowpath) {
        throw new Error("Wow Path not defined");
    }
    //if we have already a list we return that
    if (Storage.hasAddons()) {
        console.log('storage', Storage.addons)
        return Storage.getAddonsHasArray();
    }
    //scanning for addons inside wow folder
    const game = new Game(Storage.wowpath, 'retail');
    const addons = await game.getAddonsList();

    //saving them in the config file
    Storage.addons = addons;
    await Storage.save();

    return addons;
}

async function search(args) {
    const { data } = args;
    let result = [];
    let addons = [];

    result = await Curseforge.searchAddon(data.name);

    await Promise.all(
        result.map(async (item) => {
            const addon = await Parser.getAddon(item, Parser.gameFlavor.retail, Parser.releaseType.final, '9.0.1');
            if (addon) {
                addons.push(addon);
            }
        })
    );

    return addons;
}

async function install(args) {
    console.log(args);

    const { data } = args;
    await Storage.load();
    if (!Storage.wowpath) {
        throw new Error("Wow Path not defined");
    }

    const game = new Game(Storage.wowpath, 'retail');

    console.log('Downloading:', data.downloadUrl);
    // --- download ---
    const file = await download(data.downloadUrl, game.addonsPath, (res) => { console.log(res) });
    console.log("\nDecompress\n");
    const result = await unzip(file, game.addonsPath);
    console.log(`\nDecompressed ${result} elements\n`);

    data.providerName = 'curseforge';
    Storage.addAddon(data);
    await Storage.save();

    fs.unlinkSync(file)
    console.log("Done");

}

async function searchForUpdates(args) {
    await Storage.load();
    if (!Storage.wowpath) {
        throw new Error("Wow Path not defined");
    }

    if (!Storage.hasAddons()) {
        console.log('No addons', Storage.addons);
        return null;
    }

    const addons = Storage.getAddonsHasArray()
    //console.log('--- searchForUpdates ---', addons);
    const addon = addons[0];
    console.log('search for', addon);
    const result = await processAddon(addon);
    //console.log('remote version:', result);
    const parsedAddon = await Parser.getAddon(result, Parser.gameFlavor.retail, Parser.releaseType.final, '9.0.1');
    console.log('parsed addon', parsedAddon);
}

async function processAddon(addon) {
    const result = await Curseforge.searchAddon(addon.name);
    return result.find(item => item.name.toLowerCase() === addon.name.toLowerCase());
}


module.exports = { getInstalled, search, install, searchForUpdates };