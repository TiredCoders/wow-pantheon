"use strict";

const ipc = require('electron').ipcMain
const { getInstalled, search } = require('./controllers/addonsController');

const routes = {
	addon: {
		list: getInstalled,
		search: search,
	},
};

async function addonsRoute(event, args) {
	try {
		return await routes.addon[args.action](args)
	} catch (e) {
		console.error('Error:', e);
		return null;
	}
}

ipc.handle('api-addons', addonsRoute);