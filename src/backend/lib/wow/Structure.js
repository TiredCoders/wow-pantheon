"use strict";

const path = require('path');

const config = {
    gameType: {
        retail: '_retail_',
        classic: '_classic_',
    },
    addonsFolder: 'Interface/AddOns',
}

class Structure {
    constructor(wowPath, gameType) {
        const folder = config.gameType[gameType];
        this.workingPath = path.join(wowPath, folder);
    }

    get path() {
        return this.workingPath;
    }

    get addons() {
        return path.join(this.workingPath, config.addonsFolder);
    }
}

module.exports = Structure;