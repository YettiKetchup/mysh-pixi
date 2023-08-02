import { Stage } from 'mysh';
import { Application } from 'pixijs';
export declare abstract class PixiStage extends Stage {
    protected app: Application;
    constructor(app: Application);
    abstract preload(): Promise<void>;
    init(): void;
    destroy(): void;
}
