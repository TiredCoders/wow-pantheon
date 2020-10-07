"use strict";

class Addon {
    constructor(name, installedVersion = 'N/A', author = 'N/A') {
        this.name = name;
        this.installedVersion = installedVersion;
        this.author = author;
        this.version = 'N/A';
        this.remoteId = null;
        this.summary = null;
        this.downloadUrl = null
        this.websiteUrl = null
        this.fileDate = null;
        this.fingerPrint = null;
        this.thumbnail = null;
        this.installedAt = null;
        this.installedFolders = [];
        this.ignore = false;
        this.providerName = null;
        this.autoUpdate = false;
    }

    hasRequiredDownloadInfo() {
        const required = ['name', 'version', 'downloadUrl'];

        return required.every(field => this[field] !== undefined)
    }
}

module.exports = Addon;

/*
//CURSE
ChannelType = addonChannelType,
ClientType = clientType,
GameVersion = currentVersion.GameVersion.FirstOrDefault(),
*/