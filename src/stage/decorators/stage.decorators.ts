import { RootFactory } from '../data/types';

export function Root(view: RootFactory) {
  return function (constructor: Function) {
    constructor.prototype.root = view;
  };
}
