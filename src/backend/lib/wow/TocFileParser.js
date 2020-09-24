const fs = require('fs');
const readline = require('readline');

async function parse(file) {
    const fileStream = fs.createReadStream(file);

    // crlfDelay option to recognize all instances of CR LF ('\r\n') in input.txt as a single line break
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
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

module.exports = parse;