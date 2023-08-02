import { Entity } from 'mysh';
export declare class PixiEntity extends Entity {
    get visible(): boolean;
    set visible(value: boolean);
    onDestroy(): void;
    private notAttachedError;
}
