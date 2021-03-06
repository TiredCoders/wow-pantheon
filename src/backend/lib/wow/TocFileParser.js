const fs = require('fs');
const readline = require('readline');

async function parse(file) {
    const fileStream = await createReadStreamSafe(file)
    // crlfDelay option to recognize all instances of CR LF ('\r\n') in input.txt as a single line break
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
        terminal: false,
    });

    const result = {};
    for await (const line of rl) {
        //We need only metadata
        isMeta = line.substr(0, 2) === '##';
        if (isMeta) {
            const tag = line.substr(2, line.indexOf(':')).trim().replace(':', '').toLowerCase();
            const value = line.substr(line.indexOf(':') + 1, line.length).trim();
            result[tag] = value;
        }
    }

    return result;
}


/**
 * We need this metod becouse of a nodejs's bug
 * 
 * https://stackoverflow.com/questions/59216364/how-to-handle-error-from-fs-readline-interface-async-iterator
 * https://github.com/nodejs/node/issues/30831
 * 
 * @param {string} filename 
 * @param {object} options 
 */
function createReadStreamSafe(filename, options = {}) {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(filename, options);
        fileStream.on('error', reject).on('open', () => {
            resolve(fileStream);
        });
    });
}

module.exports = parse;