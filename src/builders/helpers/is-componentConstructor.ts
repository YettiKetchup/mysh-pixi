import { Component, ComponentType } from 'mysh';

export const isComponentConstructor = (
  value: Component | ComponentType<any>
): boolean => {
  return value && {}.toString.call(value) === '[object Function]';
};
