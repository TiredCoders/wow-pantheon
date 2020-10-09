"use strict";

const ipc = require('electron').ipcMain
const { getInstalled, search, install, searchForUpdates, featured } = require('./controllers/addonsController');
const { getSetting, setSetting } = require('./controllers/settingsController');
const { getDir } = require('./controllers/utilsController');

const routes = {
	addons: {
		list: getInstalled,
		search: search,
		install: install,
		featured: featured,
		searchForUpdates: searchForUpdates,
	},
	settings: {
		get: getSetting,
		set: setSetting,
	},
	utils: {
		getDir: getDir,
	}
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

async function utilsRoute(event, args) {
	try {
		return await routes.utils[args.action](args)
	} catch (e) {
		console.error('Error:', e);
		return null;
	}
}

ipc.handle('api-addons', addonsRoute);
ipc.handle('api-settings', settingsRoute);
ipc.handle('api-utils', utilsRoute);