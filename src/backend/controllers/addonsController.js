"use strict";

const Curseforge = require('../providers/curseforge');
const Parser = require('../providers/parser');
const Game = require('../lib/wow/Game');
const Settings = require("../lib/settings");
const { download, unzip } = require("../lib/utils");
const fs = require('fs');

async function getInstalled(args) {
    await Settings.load();
    if (!Settings.wowpath) {
        throw new Error("Wow Path not defined");
    }
    //if we have already a list we return that
    if (Settings.addons.main.length > 0) {
        return Settings.addons.main;
    }
    //scanning for addons inside wow folder
    const game = new Game(Settings.wowpath, 'retail');
    const addons = await game.getAddonsList();
    //saving them in the config file
    Settings.addons = addons;
    await Settings.save();

    return addons.main;
}

async function search(args) {
    const { data } = args;
    let result = [];
    let addons = [];

    result = await Curseforge.searchAddon(data.name);

    await Promise.all(
        result.map(async (item) => {
            const parsedData = await Parser.getAddon(item, Parser.gameFlavor.retail, Parser.releaseType.final, '9.0.1');
            //console.log(parsedData);
            addons.push({ ...parsedData, author: "author 1", installedVersion: "1", });
        })
    );

    return addons;
}

async function install(args) {
    console.log(args);

    const { data } = args;
    await Settings.load();
    if (!Settings.wowpath) {
        throw new Error("Wow Path not defined");
    }

    const game = new Game(Settings.wowpath, 'retail');


    console.log('Downloading:', data.downloadUrl);
    // --- download ---
    const file = await download(data.downloadUrl, game.addonsPath, (res) => { console.log(res) });
    console.log("\nDecompress\n");
    const result = await unzip(file, game.addonsPath);
    console.log(`\nDecompressed ${result} elements\n`);

    Settings.addons.main.push(data);
    await Settings.save();

    fs.unlinkSync(file)
    console.log("Done");

}

module.exports = { getInstalled, search, install };