import { Axis, Element } from '../../../types/types';

type Callback = (translateY: number) => void;

export interface ParallaxArgs {
  el: HTMLElement;
  elContent: HTMLElement;
  callback?: Callback;
  distance?: number;
  elRelative?: Element;
  gap?: number;
  axis?: Axis;
}
