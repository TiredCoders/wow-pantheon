const https = require("https");
const fs = require("fs");
const path = require("path");

const StreamZip = require("node-stream-zip");

function httpGet(url) {
	return new Promise((resolve, rejects) => {
		https
			.get(url, (resp) => {
				let data = "";

				resp.on("data", (chunk) => {
					data += chunk;
				});
				resp.on("end", () => {
					resolve(parseResponse(data));
				});
			})
			.on("error", (err) => {
				rejects(err);
			});
	});
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

				response.on("data", function (chunk) {
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

		request.on("response", function (data) {
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

module.exports = {
	httpGet: httpGet,
	download: download,
	unzip: unzip,
};
