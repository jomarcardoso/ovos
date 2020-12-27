import { Axes } from '../../types/types';

export function getScrollViewPosition(position: Axes): Axes {
  return {
    x: position.x + window.innerWidth,
    y: position.y + window.innerHeight,
  };
}

const ViewService = {
  getScrollViewPosition,
};

export default ViewService;
