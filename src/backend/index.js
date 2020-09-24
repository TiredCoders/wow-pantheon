"use strict";

const ipc = require('electron').ipcMain
const { getInstalled, search } = require('./controllers/addonsController');

const routes = {
	addon: {
		list: getInstalled,
		search: search,
	},
};


ipc.handle('api-addons', async (event, args) => routes.addon[args.action](args));
