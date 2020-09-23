"use strict";

const ipc = require('electron').ipcMain
const { getInstalled } = require('./controllers/addonController');

const routes = {
    addon: {
        list: getInstalled,
    },
};


ipc.handle('api-addons', async (event, ...args) => routes.addon[args.action](...args));
