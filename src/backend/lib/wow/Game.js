const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const parseTOC = require("./TocFileParser");

class Game {
	constructor() {
		this.addons = { main: [], dependencies: [] };
	}

	async getAddonsList() {
		const addonPath = '/home/andrea/Scaricati/test/';
		const tocFiles = await this.getTocFiles(addonPath);

		await Promise.all(
			tocFiles.map(async (file) => {
				const data = await parseTOC(file);
				const addon = {
					author: data.author,
					installedVersion: data.version,
					version: 'N/A',
					name: data.title,
					dependencies: data.dependencies,
				};
				this.addAddon(addon);
			})
		);

		return this.addons.main;
	}

	addAddon(data) {
		if (!data.dependencies) {
			this.addons.main.push(data);
		} else {
			this.addons.dependencies.push(data);
		}
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
							tocFiles.push(path.join(dir, file));
						}
					});
				}
			})
		);

		return tocFiles;
	}
}

module.exports = new Game();
