const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

class Wow {
	constructor() {
		// todo
	}

	async getAddonsList(addonPath) {
		const tocFiles = await this.getTocFiles(addonPath);
		console.log(tocFiles);
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

module.exports = new Wow();
