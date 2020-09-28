"use sticts";

const { dirSelector } = require("../lib/utils");

async function getDir(args) {
    const { title, buttonLabel } = args.data;
    return dirSelector(title, buttonLabel);
}

module.exports = { getDir };