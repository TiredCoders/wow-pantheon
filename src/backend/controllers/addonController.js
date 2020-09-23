"use strict";

async function getInstalled() {
    console.log('eccoci')
    return [{ name: 'gigi', version: '1.3' }, { name: 'poasd', version: '3.1' }];
}

module.exports = { getInstalled }