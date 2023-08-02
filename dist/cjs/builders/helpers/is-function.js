"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
const isFunction = (value) => {
    return value && {}.toString.call(value) === '[object Function]';
};
exports.isFunction = isFunction;
//# sourceMappingURL=is-function.js.map