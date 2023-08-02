import { Assets, Texture } from 'pixijs';
import { AssetsStorage } from './assets.storage';
export class AssetsLoader {
    static { this._bundles = new AssetsStorage(); }
    static async loadBundle(name) {
        try {
            const bundle = await Assets.loadBundle(name);
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
        if (!(texture instanceof Texture)) {
            throw new Error(`The ${name} in ${bundle} is not a texture`);
        }
        return texture;
    }
}
//# sourceMappingURL=assets.loader.js.map