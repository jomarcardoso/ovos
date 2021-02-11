import { Axis, Element } from '../../../types/types';

export interface FitOnScreenArgs {
  elRelative?: Element;
  elsToFit?: Array<HTMLElement>;
  proximityToFit?: number;
  axis?: Axis;
}

interface IsNearOfElementArgs {
  elToFit: HTMLElement;
  scrolledPosition: number;
}

export type IsNearOfElement = (args: IsNearOfElementArgs) => boolean;
