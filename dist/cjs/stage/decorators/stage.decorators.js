"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = void 0;
function Root(view) {
    return function (constructor) {
        constructor.prototype.root = view;
    };
}
exports.Root = Root;
//# sourceMappingURL=stage.decorators.js.map