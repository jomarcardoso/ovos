import { Axis, Element, Position } from '../../../types/types';

export interface FitOnScreenArgs {
  elRelative?: Element;
  elsToFit?: Array<HTMLElement>;
  proximityToFit?: number;
  axis?: Axis;
  debounce?: number;
  limit?: Position;
}

interface IsNearOfElementArgs {
  elToFit: HTMLElement;
  scrolledPosition: number;
}

export type IsNearOfElement = (args: IsNearOfElementArgs) => boolean;
