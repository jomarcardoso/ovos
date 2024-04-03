export type Axis = 'x' | 'y';

export interface Axes {
  x: number;
  y: number;
}

export const AXES: Axes = {
  x: 0,
  y: 0,
};

export type Direction =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'up-left'
  | 'up-right'
  | 'down-left'
  | 'down-right'
  | '';

export interface Positions {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const POSITIONS: Positions = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
};
