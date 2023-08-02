import { Texture } from 'pixijs';
export declare class AssetsLoader {
    private static _bundles;
    static loadBundle(name: string): Promise<void>;
    static getTexture(bundle: string, name: string): Texture;
}
