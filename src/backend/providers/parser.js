"use strict";

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
            console.log('eccolo');
            latestFile = file;
            return;
        }
    });
    console.log(latestFile);
    return {
        remoteId: data.id,
        name: data.name,
        summary: data.summary,
        version: latestFile.displayName,
        downloadUrl: latestFile.downloadUrl,
        downloadCount: data.downloadCount,
        websiteUrl: data.websiteUrl,
        fileDate: latestFile.fileDate,
        fingerPrint: latestFile.packageFingerprint,
    };
}

module.exports = { getAddon, gameFlavor, releaseType };