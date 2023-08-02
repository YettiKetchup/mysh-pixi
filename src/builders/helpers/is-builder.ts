import { ViewUnion } from '../data/types';
import { ViewBuilder } from '../view.builder';

export const isBuilder = (value: ViewUnion<any>): value is ViewBuilder<any> => {
  return 'build' in value;
};
