"use strict";

const Addon = require("../lib/wow/Addon");

const releaseType = {
    final: 1,
    beta: 2,
    alpha: 3,
};

const gameFlavor = {
    retail: "wow_retail",
    classic: "wow_classic",
};

async function getAddon(data, gameFlavor, releaseType, gameVersion) {
    let latestFile = {};

    data.latestFiles.reverse().forEach((file) => {
        const isSameGame = file.gameVersionFlavor === gameFlavor;
        const isRightRelease = file.releaseType === releaseType;
        if (isSameGame && isRightRelease && file.gameVersion.indexOf(gameVersion) !== false) {
            latestFile = file;
            return;
        }
    });

    /* console.log('parser - getAddon/data', data);
    console.log('parser - getAddon/latestsFiles', latestFile); */

    const addon = new Addon(data.name);
    addon.author = data.authors.map(o => o.name).join(' - ');
    addon.remoteId = data.id;
    addon.summary = data.summary;
    addon.version = latestFile.displayName;
    addon.downloadUrl = latestFile.downloadUrl;
    addon.websiteUrl = data.websiteUrl;
    addon.fileDate = latestFile.fileDate;
    addon.fingerPrint = latestFile.packageFingerprint;
    return addon.hasRequiredDownloadInfo() ? addon : null;
}

module.exports = {getAddon, gameFlavor, releaseType};