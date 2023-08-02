"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsLoader = void 0;
const pixijs_1 = require("pixijs");
const bundle_1 = require("./bundle");
class AssetsLoader {
    static { this._textures = new bundle_1.Bundle(); }
    static { this._spritesheets = new bundle_1.Bundle(); }
    static get Textures() {
        return this._textures;
    }
    static get Spritesheets() {
        return this._spritesheets;
    }
    static async init(options) {
        await pixijs_1.Assets.init(options);
    }
    static async loadBundle(name) {
        try {
            const bundle = await pixijs_1.Assets.loadBundle(name);
            for (let key in bundle) {
                if (bundle[key] instanceof pixijs_1.Texture) {
                    this.addTexture(key, bundle[key]);
                }
                if (bundle[key] instanceof pixijs_1.Spritesheet) {
                    this.addSpritesheet(key, bundle[key]);
                }
            }
        }
        catch (e) {
            throw new Error(`Can't load ${name} bundle!`);
        }
    }
    static addTexture(name, texture) {
        this._textures.add(name, texture);
    }
    static addSpritesheet(name, spritesheet) {
        this._spritesheets.add(name, spritesheet);
        const textures = spritesheet.textures;
        for (let key in textures) {
            this.addTexture(key, textures[key]);
        }
    }
}
exports.AssetsLoader = AssetsLoader;
//# sourceMappingURL=assets.loader.js.map