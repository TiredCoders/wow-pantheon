"use strict";

const { httpPost, httpCall } = require("../lib/utils");

const CURSEFORGE_HOST = "addons-ecs.forgesvc.net"
const RELEASE_ALPHA = 3;
const RELEASE_BETA = 2;
const RELEASE_FINAL = 1;
const WOW_CLASSIC = "wow_classic";
const WOW_RETAIL = "wow_retail";
const GAME_VERSION = "8.3.0";

class Curseforge {
	getAddonInfo(addonId) {
		return this.fetch('GET', addonId);
	}

	searchAddon(name) {
		return this.fetch('GET', `search?gameId=1&pageSize=10&searchFilter=${name}`);
	}

	getFeatured() {
		return this.fetch('POST', 'featured', {
			"GameId": 1,
			"popularCount": 10,
			/* "addonIds": [],
			"featuredCount": 2,
			"updatedCount": 2, */
		});
	}

	getDownloadUrl(addonId, fileId) {
		return this.fetch('GET', `${addonId}/file/${fileId}/download-url`);
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

	fetch(method, endpoint, body = null) {
		return httpCall({
			method: method,
			hostname: CURSEFORGE_HOST,
			headers: body ? { 'Content-Type': 'application/json' } : {},
			path: `/api/v2/addon/${endpoint}`,
			body: JSON.stringify(body),
		})
	}
}

module.exports = new Curseforge();
