export type Element = HTMLElement | HTMLDocument;

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

export enum Axis {
  X = 'x',
  Y = 'y',
}

export interface Axes {
  x: number;
  y: number;
}

export interface Position {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface OnScrollArgs {
  event: UIEvent;
  scrollingElement: HTMLElement;
  scrollPosition: Axes;
  scrollViewPosition: Axes;
  direction: Direction;
  changedDirection: boolean;
  relativeScrollPosition: Axes;
}
