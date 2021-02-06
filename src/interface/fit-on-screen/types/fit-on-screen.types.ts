import { Element } from '../../../types/types';

export interface FitOnScreenArgs {
  elRelative?: Element;
  elsToFit?: Array<HTMLElement>;
  proximityToFit?: number;
}

interface IsNearOfElementArgs {
  elToFit: HTMLElement;
  scrolledPosition: number;
}

export type IsNearOfElement = (args: IsNearOfElementArgs) => boolean;
