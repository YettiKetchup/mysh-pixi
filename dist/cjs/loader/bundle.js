"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundle = void 0;
class Bundle {
    constructor() {
        this._list = new Map();
    }
    add(name, asset) {
        // if (this._list.has(name)) {
        //   throw new Error(
        //     `The ${name} asset is already loaded. The new asset will not be added.`
        //   );
        // }
        this._list.set(name, asset);
    }
    get(name) {
        const asset = this._list.get(name);
        if (!asset) {
            throw new Error(`Can't find asset ${name}!`);
        }
        return asset;
    }
}
exports.Bundle = Bundle;
//# sourceMappingURL=bundle.js.map