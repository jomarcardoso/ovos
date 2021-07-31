export type Axis = 'x' | 'y';

export interface Axes {
  x: number;
  y: number;
}

export const AXES: Axes = {
  x: 0,
  y: 0,
};

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  UP_LEFT = 'up-left',
  UP_RIGHT = 'up-right',
  DOWN_LEFT = 'down-left',
  DOWN_RIGHT = 'down-right',
  NONE = '',
}

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
