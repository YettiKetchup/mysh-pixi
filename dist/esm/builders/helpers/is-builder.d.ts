import { ViewUnion } from '../data/types';
import { ViewBuilder } from '../view.builder';
export declare const isBuilder: (value: ViewUnion<any>) => value is ViewBuilder<any>;
