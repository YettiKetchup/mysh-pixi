"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsLoader = void 0;
const core_1 = require("@pixi/core");
const spritesheet_1 = require("@pixi/spritesheet");
const assets_1 = require("@pixi/assets");
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
        await assets_1.Assets.init(options);
    }
    static loadFont(name, url, weight = 'normal') {
        return new Promise(async (resolve, reject) => {
            const font = new FontFace(name, `url(${url})`);
            font.weight = weight;
            await font.load();
            document.fonts.add(font);
            const el = document.createElement('DIV');
            el.style.fontFamily = name;
            resolve();
        });
    }
    static async loadBundle(name) {
        try {
            const bundle = await assets_1.Assets.loadBundle(name);
            for (let key in bundle) {
                if (bundle[key] instanceof core_1.Texture) {
                    this.addTexture(key, bundle[key]);
                }
                if (bundle[key] instanceof spritesheet_1.Spritesheet) {
                    this.addSpritesheet(key, bundle[key]);
                }
            }
        }
        catch (e) {
            console.log(e);
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