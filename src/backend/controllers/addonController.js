"use strict";

async function getInstalled(args) {
    console.log('eccoci', args)
    return [{ name: 'gigi', version: '1.3' }, { name: 'poasd', version: '3.1' }];
}

module.exports = { getInstalled: getInstalled }