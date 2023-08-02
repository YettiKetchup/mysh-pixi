export function Root(view) {
    return function (constructor) {
        constructor.prototype.root = view;
    };
}
//# sourceMappingURL=stage.decorators.js.map