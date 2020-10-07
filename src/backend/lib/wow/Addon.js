"use strict";

class Addon {
    constructor(name, installedVersion = 'N/A', author = 'N/A') {
        this.name = name;
        this.installedVersion = installedVersion;
        this.author = author;
        this.dir = null;
        this.version = 'N/A';
        this.remoteId = null;
        this.summary = null;
        this.downloadUrl = null
        this.websiteUrl = null
        this.fileDate = null;
        this.fingerPrint = null;
        this.thumbnail = null;
    }

    hasRequiredDownloadInfo() {
        const required = ['name', 'version', 'downloadUrl'];

        return required.every(field => this[field] !== undefined)
    }
}

module.exports = Addon;

/*
existingAddon.Name = matchingAddon.Name;
existingAddon.FolderName = matchingAddon.FolderName;
existingAddon.DownloadUrl = matchingAddon.DownloadUrl;
existingAddon.InstalledVersion = matchingAddon.InstalledVersion;
existingAddon.ExternalUrl = matchingAddon.ExternalUrl;
existingAddon.LatestVersion = matchingAddon.LatestVersion;
existingAddon.ThumbnailUrl = matchingAddon.ThumbnailUrl;
existingAddon.GameVersion = matchingAddon.GameVersion;
existingAddon.Author = matchingAddon.Author;
existingAddon.InstalledVersion = matchingAddon.InstalledVersion;



//CURSE
Author = string.Join(", ", scanResult.SearchResult.Authors.Select(author => author.Name)),
Name = scanResult.SearchResult.Name,
ChannelType = addonChannelType,
AutoUpdateEnabled = false,
ClientType = clientType,
DownloadUrl = latestVersion.DownloadUrl,
ExternalUrl = scanResult.SearchResult.WebsiteUrl,
ExternalId = scanResult.SearchResult.Id.ToString(),
FolderName = scanResult.AddonFolder.Name,
GameVersion = currentVersion.GameVersion.FirstOrDefault(),
InstalledAt = DateTime.Now,
InstalledFolders = folderList,
InstalledVersion = currentVersion.DisplayName,
IsIgnored = false,
LatestVersion = latestVersion.DisplayName,
ProviderName = Name,
ThumbnailUrl = GetThumbnailUrl(scanResult.SearchResult)
*/