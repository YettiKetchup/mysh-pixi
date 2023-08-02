"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixiStage = void 0;
const mysh_1 = require("mysh");
const pixijs_1 = require("pixijs");
const stage_decorators_1 = require("./decorators/stage.decorators");
let PixiStage = exports.PixiStage = class PixiStage extends mysh_1.Stage {
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
        this.app.stage = new pixijs_1.Container();
    }
};
exports.PixiStage = PixiStage = __decorate([
    (0, stage_decorators_1.Root)(() => new pixijs_1.Container())
], PixiStage);
//# sourceMappingURL=pixi.stage.js.map