import { Container } from 'pixijs';
import { ViewBuilder } from '../view.builder';

export type ViewConstructor<T extends Container> = new (...args: any[]) => T;

export type ViewUnion<T extends Container> =
  | ViewConstructor<T>
  | ViewBuilder<T>
  | T;
