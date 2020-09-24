const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const tocParser = require("./TocFileParser");

class Game {
	constructor() {
		// todo
	}

	async getAddonsList() {
		const addonPath = '/home/andrea/Scaricati/test/';
		const tocFiles = await this.getTocFiles(addonPath);

		const addons = [];

		await Promise.all(
			tocFiles.map(async (file) => {
				const data = await tocParser(file);
				addons.push({ author: data.author, version: data.version, title: data.title });
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
						const ext = path.extname(file);
						if (ext === ".toc") {
							tocFiles.push(path.join(addonPath, file));
						}
					});
				}
			})
		);

		return tocFiles;
	}
}

module.exports = new Game();
