import { ScrollableElement } from '../../utilities/scroll';
import { Axis, Positions } from '../../utilities/axis';

export interface FitOnScreenArgs {
  elRelative?: ScrollableElement;
  elsToFit?: Array<HTMLElement>;
  proximityToFit?: number;
  axis?: Axis;
  debounce?: number;
  limit?: Positions;
  doNotFitIfAbove?: boolean;
  doNotFitIfBellow?: boolean;
}

interface IsNearOfElementArgs {
  elToFit: HTMLElement;
  scrolledPosition: number;
}

export type IsNearOfElement = (args: IsNearOfElementArgs) => boolean;
