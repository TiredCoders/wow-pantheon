"use strict";

const ipc = require('electron').ipcMain
const { getInstalled, search } = require('./controllers/addonsController');
const { getSetting, setSetting } = require('./controllers/settingsController');

const routes = {
	addons: {
		list: getInstalled,
		search: search,
	},
	settings: {
		get: getSetting,
		set: setSetting,
	},
};

async function addonsRoute(event, args) {
	try {
		return await routes.addons[args.action](args)
	} catch (e) {
		console.error('Error:', e);
		return null;
	}
}

async function settingsRoute(event, args) {
	try {
		return await routes.settings[args.action](args)
	} catch (e) {
		console.error('Error:', e);
		return null;
	}
}

ipc.handle('api-addons', addonsRoute);
ipc.handle('api-settings', settingsRoute);