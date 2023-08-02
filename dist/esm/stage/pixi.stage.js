var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Stage } from 'mysh';
import { Container } from 'pixijs';
import { Root } from './decorators/stage.decorators';
export let PixiStage = class PixiStage extends Stage {
    constructor(app) {
        super();
        this.app = app;
    }
    init() {
        super.init();
        const { root } = this;
        this.app.stage = root();
        this.app.stage.x = this.app.view.width / 2;
        this.app.stage.y = this.app.view.height / 2;
    }
    destroy() {
        super.destroy();
        this.app.stage.destroy();
        this.app.stage = new Container();
    }
};
PixiStage = __decorate([
    Root(() => new Container())
], PixiStage);
//# sourceMappingURL=pixi.stage.js.map