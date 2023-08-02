"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixiEntity = void 0;
const mysh_1 = require("mysh");
class PixiEntity extends mysh_1.Entity {
    get visible() {
        try {
            return this.components[0].visible;
        }
        catch {
            throw this.notAttachedError();
        }
    }
    set visible(value) {
        try {
            this.components[0].visible = value;
        }
        catch {
            throw this.notAttachedError();
        }
    }
    onDestroy() {
        super.onDestroy();
        try {
            this.components[0].destroy();
        }
        catch {
            throw this.notAttachedError();
        }
    }
    notAttachedError() {
        return new Error('The entity has not been added to the Node. Create an Entity via ViewBuilder.');
    }
}
exports.PixiEntity = PixiEntity;
//# sourceMappingURL=pixi.entity.js.map