import { Axes } from '../../types/types';

export function getScrollViewPosition(position: Axes): Axes {
  return {
    x: position.x + window.innerWidth,
    y: position.y + window.innerHeight,
  };
}

export function getViewportHeight(): number {
  return window.innerHeight;
}

const ViewService = {
  getScrollViewPosition,
};

export default ViewService;
