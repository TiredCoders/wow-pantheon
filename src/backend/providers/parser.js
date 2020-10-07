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
    const latestFile = data.latestFiles.find((file) => (
        file.gameVersionFlavor === gameFlavor &&
        file.releaseType === releaseType &&
        file.gameVersion.indexOf(gameVersion) !== false
    ));

    if (!latestFile) {
        return null;
    }

    const thumbnail = data.attachments.find(o => o.isDefault && o.thumbnailUrl.length > 1);

    const addon = new Addon(data.name);
    addon.author = data.authors.map(o => o.name).join(' - ');
    addon.remoteId = data.id;
    addon.summary = data.summary;
    addon.version = latestFile.displayName;
    addon.downloadUrl = latestFile.downloadUrl;
    addon.websiteUrl = data.websiteUrl;
    addon.fileDate = latestFile.fileDate;
    addon.fingerPrint = latestFile.packageFingerprint;
    addon.thumbnail = thumbnail ? thumbnail.thumbnailUrl : null;

    return addon.hasRequiredDownloadInfo() ? addon : null;
}

module.exports = { getAddon, gameFlavor, releaseType };