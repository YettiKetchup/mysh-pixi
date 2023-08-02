import { Assets, AssetInitOptions, Texture, Spritesheet } from 'pixijs';
import { Bundle } from './bundle';

export class AssetsLoader {
  private static _textures: Bundle<Texture> = new Bundle();
  private static _spritesheets: Bundle<Spritesheet> = new Bundle();

  public static get Textures(): Bundle<Texture> {
    return this._textures;
  }

  public static get Spritesheets(): Bundle<Spritesheet> {
    return this._spritesheets;
  }

  public static async init(options: AssetInitOptions): Promise<void> {
    await Assets.init(options);
  }

  public static async loadBundle(name: string): Promise<void> {
    try {
      const bundle = await Assets.loadBundle(name);

      for (let key in bundle) {
        if (bundle[key] instanceof Texture) {
          this.addTexture(key, bundle[key]);
        }

        if (bundle[key] instanceof Spritesheet) {
          this.addSpritesheet(key, bundle[key]);
        }
      }
    } catch (e) {
      throw new Error(`Can't load ${name} bundle!`);
    }
  }

  private static addTexture(name: string, texture: Texture): void {
    this._textures.add(name, texture);
  }

  private static addSpritesheet(name: string, spritesheet: Spritesheet): void {
    this._spritesheets.add(name, spritesheet);

    const textures = spritesheet.textures;

    for (let key in textures) {
      this.addTexture(key, textures[key]);
    }
  }
}
