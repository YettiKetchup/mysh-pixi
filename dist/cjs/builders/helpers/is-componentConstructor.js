"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentConstructor = void 0;
const isComponentConstructor = (value) => {
    return value && {}.toString.call(value) === '[object Function]';
};
exports.isComponentConstructor = isComponentConstructor;
//# sourceMappingURL=is-componentConstructor.js.map