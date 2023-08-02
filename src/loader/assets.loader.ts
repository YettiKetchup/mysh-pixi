import { Assets, Texture } from 'pixijs';
import { AssetsStorage } from './assets.storage';

export class AssetsLoader {
  private static _bundles: AssetsStorage = new AssetsStorage();

  public static async loadBundle(name: string): Promise<void> {
    try {
      const bundle = await Assets.loadBundle(name);
      this._bundles[name] = bundle;
    } catch (e) {
      throw new Error(`Can't load ${name} bundle!`);
    }
  }

  public static getTexture(bundle: string, name: string): Texture {
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
