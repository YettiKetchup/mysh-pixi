import { Component, ComponentType, EntitiesCollection } from 'mysh';
import { Container, MaskData, Texture } from 'pixijs';
import { ViewUnion } from './data/types';
import { PixiEntity } from '../core/entities';
export declare class ViewBuilder<T extends Container> {
    private _root;
    private _current;
    private _entity;
    protected get root(): T;
    protected set root(value: T);
    protected get current(): T;
    protected set current(value: T);
    protected get entity(): PixiEntity;
    protected set entity(value: PixiEntity);
    constructor(root: ViewUnion<T>);
    isVisible(visible: boolean): ViewBuilder<T>;
    isMask(mask: Container | MaskData): ViewBuilder<T>;
    withZIndex(index: number): ViewBuilder<T>;
    withPivot(x: number, y: number): ViewBuilder<T>;
    withAnchor(x: number, y: number): ViewBuilder<T>;
    withTexture(texture: Texture | string): ViewBuilder<T>;
    inPosition(x: number, y: number): ViewBuilder<T>;
    withAngle(value: number): ViewBuilder<T>;
    withNode<K extends Container>(node: ViewUnion<K>): ViewBuilder<T>;
    withChildren(): ViewBuilder<T>;
    endChildren(): ViewBuilder<T>;
    asEntity(collection: EntitiesCollection): ViewBuilder<T>;
    withComponent(component: Component | ComponentType<any>): ViewBuilder<T>;
    build(): T;
    private exctractView;
}
