import { Axis, Element, Position } from '../../../types/types';

export interface FitOnScreenArgs {
  elRelative?: Element;
  elsToFit?: Array<HTMLElement>;
  proximityToFit?: number;
  axis?: Axis;
  lazyTime?: number;
  gap?: Partial<Position>;
}

interface IsNearOfElementArgs {
  elToFit: HTMLElement;
  scrolledPosition: number;
}

export type IsNearOfElement = (args: IsNearOfElementArgs) => boolean;
