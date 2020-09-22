const { httpGet } = require("../libs/utils");

const CURSEFORGE_API = "https://addons-ecs.forgesvc.net/api/v2/addon/";
const RELEASE_ALPHA = 3;
const RELEASE_BETA = 2;
const RELEASE_FINAL = 1;
const WOW_CLASSIC = "wow_classic";
const WOW_RETAIL = "wow_retail";
const GAME_VERSION = "8.3.0";

class Curseforge {
	getAddonInfo(addonId) {
		return this.fetch(addonId);
	}

	searchAddon(name) {
		return this.fetch(`search?gameId=1&pageSize=10&searchFilter=${name}`);
	}

	getDownloadUrl(addonId, fileId) {
		return this.fetch(`${addonId}/file/${fileId}/download-url`);
	}

	async getFile(addonId, releaseType = 1, gameFlavor = "wow_retail") {
		const data = await this.getAddonInfo(addonId);
		let latestFile = {};

		data.latestFiles.reverse().forEach((file) => {
			const isSameGame = file.gameVersionFlavor === gameFlavor;
			const isRightRelease = file.releaseType === releaseType;
			if (isSameGame && isRightRelease && file.gameVersion.indexOf(GAME_VERSION) !== false) {
				latestFile = file;
				return;
			}
		});

		return {
			id: addonId,
			name: data.name,
			summary: data.summary,
			latestVersion: latestFile.displayName,
			downloadUrl: latestFile.downloadUrl,
			downloadCount: data.downloadCount,
			websiteUrl: data.websiteUrl,
			fileDate: latestFile.fileDate,
		};
	}

	fetch(endpoint) {
		return httpGet(CURSEFORGE_API + endpoint);
	}
}

module.exports = new Curseforge();
