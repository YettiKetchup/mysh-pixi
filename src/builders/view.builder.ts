import { Component, ComponentType, EntitiesCollection } from 'mysh';
import { Container, MaskData, Sprite, Texture } from 'pixijs';
import { ViewConstructor, ViewUnion } from './data/types';
import { PixiEntity } from '../core/entities';
import { isFunction, isBuilder, isComponentConstructor } from './helpers';

export class ViewBuilder<T extends Container> {
  private _root: T | null = null;
  private _current: T | null = null;
  private _entity: PixiEntity | null = null;

  protected get root(): T {
    return this._root as T;
  }

  protected set root(value: T) {
    this._root = value;
  }

  protected get current(): T {
    return this._current as T;
  }

  protected set current(value: T) {
    this._current = value;
  }

  protected get entity(): PixiEntity {
    return this._entity as PixiEntity;
  }

  protected set entity(value: PixiEntity) {
    this._entity = value;
  }

  constructor(root: ViewUnion<T>) {
    this._root = this.exctractView(root);
    this._current = this._root;
  }

  public isVisible(visible: boolean): ViewBuilder<T> {
    this.current.visible = visible;
    return this;
  }

  public isMask(mask: Container | MaskData): ViewBuilder<T> {
    this.current.mask = mask;
    return this;
  }

  public withZIndex(index: number): ViewBuilder<T> {
    this.current.zIndex = index;
    return this;
  }

  public withPivot(x: number, y: number): ViewBuilder<T> {
    this.current.pivot.set(x, y);
    return this;
  }

  public withAnchor(x: number, y: number): ViewBuilder<T> {
    if (this.current.isSprite) {
      const sprite = this.current as unknown as Sprite;
      sprite.anchor.set(x, y);
    }

    return this;
  }

  public withTexture(texture: Texture): ViewBuilder<T> {
    if (this.current.isSprite) {
      (this.current as unknown as Sprite).texture = texture;
    }

    return this;
  }

  public inPosition(x: number, y: number): ViewBuilder<T> {
    this.current.position.set(x, y);
    return this;
  }

  public withAngle(value: number): ViewBuilder<T> {
    this.current.angle = value;
    return this;
  }

  public withNode<K extends Container>(node: ViewUnion<K>): ViewBuilder<T> {
    this.current = this.exctractView(node);
    this.root.addChild(this.current);

    return this;
  }

  public withChildren(): ViewBuilder<T> {
    this.root = this.current;
    return this;
  }

  public endChildren(): ViewBuilder<T> {
    this.root = this.current.parent as T;
    this.current = this.root;
    return this;
  }

  public asEntity(collection: EntitiesCollection): ViewBuilder<T> {
    this.entity = new PixiEntity();
    this.entity.add(this.current);
    collection.add(this.entity);
    return this;
  }

  public withComponent(
    component: Component | ComponentType<any>
  ): ViewBuilder<T> {
    if (isComponentConstructor(component)) {
      const ctor = component as ComponentType<any>;
      component = new ctor();
    }

    this.entity.add(component as Component);

    return this;
  }

  public build(): T {
    return this._root as T;
  }

  private exctractView(view: ViewUnion<any>): T {
    let obj;

    if (isFunction(view)) {
      const ctor = view as ViewConstructor<any>;
      obj = new ctor();
    } else {
      if (isBuilder(view)) {
        obj = view.build();
      } else {
        obj = view as T;
      }
    }

    return obj;
  }
}
