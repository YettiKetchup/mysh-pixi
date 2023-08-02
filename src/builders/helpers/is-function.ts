import { ViewUnion } from '../data/types';

export const isFunction = (value: ViewUnion<any>): boolean => {
  return value && {}.toString.call(value) === '[object Function]';
};
