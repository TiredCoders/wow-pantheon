const https = require("https");
const fs = require("fs");
const path = require("path");

const StreamZip = require("node-stream-zip");

const { dialog } = require('electron');

async function dirSelector(title = "Directory selector", buttonLabel = "Select") {
	let result = await dialog.showOpenDialog({
		title: title,
		buttonLabel: buttonLabel,
		properties: ['openDirectory']
	});

	return !result.canceled ? result.filePaths[0] : null;
}

function httpCall({ body, ...options }) {
	return new Promise((resolve, reject) => {
		const req = https.request({
			...options,
		}, res => {
			const chunks = [];
			res.on('data', data => chunks.push(data))
			res.on('end', () => {
				const body = Buffer.concat(chunks);
				resolve(parseResponse(body));
			})
		})
		req.on('error', reject);
		if (body) {
			req.write(body);
		}
		req.end();
	})
}

function parseResponse(str) {
	try {
		return JSON.parse(str);
	} catch (e) {
		return str;
	}
}

/**
 * Download a resource from `url` to `dest`.
 * @param {string} url - Valid URL to attempt download of resource
 * @param {string} dest - Valid path to save the file.
 * @returns {Promise<void>} - Returns asynchronously when successfully completed download
 */
function download(url, dest, callback) {
	return new Promise((resolve, reject) => {
		let received_bytes = 0;
		let total_bytes = 0;

		const request = https.get(url, (response) => {
			if (response.statusCode === 200) {
				dest = path.join(dest, path.basename(url));
				const file = fs.createWriteStream(dest, {
					flags: "wx",
				});

				file.on("finish", () => resolve(dest));
				file.on("error", (err) => {
					file.close();
					if (err.code === "EEXIST") resolve(dest);
					else fs.unlink(dest, () => reject(err.message)); // Delete temp file
				});

				response.on("data", function(chunk) {
					// Update the received bytes
					received_bytes += chunk.length;
					callback(received_bytes, total_bytes);
				});

				response.pipe(file);
			} else if (response.statusCode === 302 || response.statusCode === 301) {
				//Recursively follow redirects, only a 200 will resolve.
				download(response.headers.location, dest, callback).then((data) => resolve(data));
			} else {
				reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
			}
		});

		request.on("response", function(data) {
			// Change the total bytes value to get progress later.
			total_bytes = parseInt(data.headers["content-length"]);
		});

		request.on("error", (err) => {
			reject(err.message);
		});
	});
}

function unzip(filePath, outPath) {
	return new Promise((resolve, reject) => {
		const zip = new StreamZip({
			file: filePath,
			storeEntries: true,
		});

		// Handle errors
		zip.on("error", (err) => reject(err));

		zip.on("ready", () => {
			zip.extract(null, outPath, (err, count) => {
				zip.close();
				err ? reject(err) : resolve(count);
			});
		});
	});
}

function dateIsBiggerThan(string1, string2) {
	const dt1 = Date.parse(string1);
	const dt2 = Date.parse(string2);

	if (isNaN(dt1) || (!isNaN(dt2) && dt1 > dt2)) {
		return false;
	}
	return true;
}

module.exports = { httpCall, download, unzip, dirSelector, dateIsBiggerThan };
