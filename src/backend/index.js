"use strict";

const ipc = require("electron").ipcMain;

ipc.on("data", handleMsg);

function handleMsg(event, arg) {
	event.sender.send("data", {
		msg: "Response from backend",
	});
}
