const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const parseTOC = require("./TocFileParser");
const Structure = require("./Structure");
const Addon = require("./Addon");

class Game {
	constructor(wowPath, gameType) {
		this.structure = new Structure(wowPath, gameType);
	}

	get addonsPath() {
		return this.structure.addons;
	}

	async getAddonsList() {
		const addonPath = this.structure.addons;
		const tocFiles = await this.getTocFiles(addonPath);

		const addons = {};
		await Promise.all(
			tocFiles.map(async (file) => {
				const data = await parseTOC(file);

				if (!data.dependencies && data.version) {
					const addon = new Addon(data.title, data.version, data.author);
					addons[addon.name] = addon;
				}

			})
		);

		return addons;
	}

	async getTocFiles(addonPath) {
		const tocFiles = [];
		const items = await fsPromises.readdir(addonPath, {
			withFileTypes: true,
		});

		await Promise.all(
			items.map(async (item) => {
				if (item.isDirectory()) {
					const dir = path.join(addonPath, item.name);
					const files = await fsPromises.readdir(dir);
					files.forEach((file) => {
						if (path.extname(file).toLowerCase() === '.toc') {
							tocFiles.push(path.join(dir, file));
						}
					});
				}
			})
		);

		return tocFiles;
	}
}

module.exports = Game;
