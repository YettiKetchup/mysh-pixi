"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsLoader = void 0;
const pixijs_1 = require("pixijs");
const assets_storage_1 = require("./assets.storage");
class AssetsLoader {
    static { this._bundles = new assets_storage_1.AssetsStorage(); }
    static async loadBundle(name) {
        try {
            const bundle = await pixijs_1.Assets.loadBundle(name);
            this._bundles[name] = bundle;
        }
        catch (e) {
            throw new Error(`Can't load ${name} bundle!`);
        }
    }
    static getTexture(bundle, name) {
        const texture = this._bundles[bundle][name];
        if (!texture) {
            throw new Error(`Can't find texture ${name} in ${bundle}`);
        }
        if (!(texture instanceof pixijs_1.Texture)) {
            throw new Error(`The ${name} in ${bundle} is not a texture`);
        }
        return texture;
    }
}
exports.AssetsLoader = AssetsLoader;
//# sourceMappingURL=assets.loader.js.map