"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewBuilder = void 0;
const pixijs_1 = require("pixijs");
const entities_1 = require("../core/entities");
const helpers_1 = require("./helpers");
const loader_1 = require("../loader");
class ViewBuilder {
    get root() {
        return this._root;
    }
    set root(value) {
        this._root = value;
    }
    get current() {
        return this._current;
    }
    set current(value) {
        this._current = value;
    }
    get entity() {
        return this._entity;
    }
    set entity(value) {
        this._entity = value;
    }
    constructor(root) {
        this._root = null;
        this._current = null;
        this._entity = null;
        this._root = this.exctractView(root);
        this._current = this._root;
    }
    isVisible(visible) {
        this.current.visible = visible;
        return this;
    }
    isMask(mask) {
        this.current.mask = mask;
        return this;
    }
    isInteractive(value) {
        this.current.interactive = value;
        return this;
    }
    withZIndex(index) {
        this.current.zIndex = index;
        return this;
    }
    withPivot(x, y) {
        this.current.pivot.set(x, y);
        return this;
    }
    withRelativePivot(x, y) {
        const { width, height } = this.current.getBounds();
        const pivotX = x * width;
        const pivotY = y * height;
        console.log(width, height, pivotX, pivotY);
        this.current.pivot.set(pivotX, pivotY);
        return this;
    }
    withAnchor(x, y) {
        if (this.current.isSprite) {
            const sprite = this.current;
            sprite.anchor.set(x, y);
        }
        return this;
    }
    withTexture(texture) {
        if (this.current.isSprite) {
            const sprite = this.current;
            const textureToSprite = texture instanceof pixijs_1.Texture
                ? texture
                : loader_1.AssetsLoader.Textures.get(texture);
            sprite.texture = textureToSprite;
        }
        return this;
    }
    withAlpha(value) {
        this.current.alpha = value;
        return this;
    }
    withTint(color) {
        if (this.current.isSprite) {
            this.current.tint = color;
        }
        return this;
    }
    withPosition(x, y) {
        this.current.position.set(x, y);
        return this;
    }
    withPositionX(x) {
        this.current.position.x = x;
        return this;
    }
    withPositionY(y) {
        this.current.position.y = y;
        return this;
    }
    withScale(x, y) {
        this.current.scale.set(x, y);
        return this;
    }
    withSkew(x, y) {
        this.current.skew.set(x, y);
        return this;
    }
    withWidth(width) {
        this.current.width = width;
        return this;
    }
    withHeight(height) {
        this.current.height = height;
        return this;
    }
    withAngle(value) {
        this.current.angle = value;
        return this;
    }
    withNode(node) {
        this.current = this.exctractView(node);
        this.root.addChild(this.current);
        return this;
    }
    withChildren() {
        this.root = this.current;
        return this;
    }
    endChildren() {
        this.root = this.current.parent;
        this.current = this.root;
        return this;
    }
    withFactory(callback, data) {
        callback(this, data);
        return this;
    }
    rootAsCurrent() {
        this.current = this.root;
        return this;
    }
    asEntity(collection) {
        this.entity = new entities_1.PixiEntity();
        this.entity.add(this.current);
        collection.add(this.entity);
        return this;
    }
    withComponent(component, isObservable = false) {
        if ((0, helpers_1.isComponentConstructor)(component)) {
            const ctor = component;
            component = new ctor();
        }
        if (isObservable) {
            const entity$ = this.entity.observable();
            entity$.add(component);
        }
        else {
            this.entity.add(component);
        }
        return this;
    }
    withComponents(component, isObservable = false) {
        component.forEach((component) => this.withComponent(component, isObservable));
        return this;
    }
    build() {
        return this._root;
    }
    exctractView(view) {
        let obj;
        if ((0, helpers_1.isFunction)(view)) {
            const ctor = view;
            obj = new ctor();
        }
        else {
            if ((0, helpers_1.isBuilder)(view)) {
                obj = view.build();
            }
            else {
                obj = view;
            }
        }
        return obj;
    }
}
exports.ViewBuilder = ViewBuilder;
//# sourceMappingURL=view.builder.js.map