"use strict";

const AGENT_PATH = {
    "win32": "ProgramData/Battle.net/Agent",
    "darwin": "/Users/Shared/Battle.net/Agent",
};

const DB_FILE = "product.db";

class BlizzardAgent {

    static decodeProducts(productDbPath) {
        /* const productDbData = FileUtils.readFileSync(productDbPath);

        try {
            const productDb = ProductDb.decode(productDbData);
            const wowProducts = productDb.products
                .filter((p) => p.family === "wow")
                .map((p) => ({
                    location: p.client.location,
                    name: p.client.name,
                    clientType: p.client.name,
                }));

            console.log("wowProducts", wowProducts);
            return wowProducts;
        } catch (e) {
            console.error("failed to decode product db");
            console.error(e);
            return [];
        } */
    }



    searchDBFile() {
        //todo
        return;
    }
}

module.exports = BlizzardAgent