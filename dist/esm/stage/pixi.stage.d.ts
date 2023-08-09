import { Stage } from 'mysh';
import { Application } from '@pixi/app';
export declare abstract class PixiStage extends Stage {
    protected app: Application;
    constructor(app: Application);
    abstract preload(): Promise<void>;
    preInit(): void;
    destroy(): void;
}
