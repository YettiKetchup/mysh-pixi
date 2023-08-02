import { PixiEntity } from '../core/entities';
import { isFunction, isBuilder, isComponentConstructor } from './helpers';
export class ViewBuilder {
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
    withZIndex(index) {
        this.current.zIndex = index;
        return this;
    }
    withPivot(x, y) {
        this.current.pivot.set(x, y);
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
            this.current.texture = texture;
        }
        return this;
    }
    inPosition(x, y) {
        this.current.position.set(x, y);
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
    asEntity(collection) {
        this.entity = new PixiEntity();
        this.entity.add(this.current);
        collection.add(this.entity);
        return this;
    }
    withComponent(component) {
        if (isComponentConstructor(component)) {
            const ctor = component;
            component = new ctor();
        }
        this.entity.add(component);
        return this;
    }
    build() {
        return this._root;
    }
    exctractView(view) {
        let obj;
        if (isFunction(view)) {
            const ctor = view;
            obj = new ctor();
        }
        else {
            if (isBuilder(view)) {
                obj = view.build();
            }
            else {
                obj = view;
            }
        }
        return obj;
    }
}
//# sourceMappingURL=view.builder.js.map