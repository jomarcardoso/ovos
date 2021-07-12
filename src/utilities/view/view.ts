import { Axes } from '../axis';

export function getViewportHeight(): number {
  return window.innerHeight;
}

export function getViewportWidth(): number {
  return window.innerWidth;
}

export function getTotalViewScrolled(position: Axes): Axes {
  return {
    x: position.x + getViewportWidth(),
    y: position.y + getViewportHeight(),
  };
}
