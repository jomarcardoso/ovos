import { Axis } from '../../utilities/axis';
import { ScrollableElement } from '../../utilities/scroll';

type Callback = (translateY: number) => void;

export interface ParallaxArgs {
  el?: HTMLElement;
  elContent?: HTMLElement;
  callback?: Callback;
  distance?: number;
  elRelative?: ScrollableElement;
  gap?: number;
  axis?: Axis;
}
