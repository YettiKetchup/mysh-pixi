import { AssetInitOptions, Texture, Spritesheet } from 'pixijs';
import { Bundle } from './bundle';
export declare class AssetsLoader {
    private static _textures;
    private static _spritesheets;
    static get Textures(): Bundle<Texture>;
    static get Spritesheets(): Bundle<Spritesheet>;
    static init(options: AssetInitOptions): Promise<void>;
    static loadBundle(name: string): Promise<void>;
    private static addTexture;
    private static addSpritesheet;
}
