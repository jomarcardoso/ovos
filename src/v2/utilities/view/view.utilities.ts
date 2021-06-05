import { Axes } from '../axis';

export function getViewportHeight(): number {
  return window.innerHeight;
}

export function getViewportWicth(): number {
  return window.innerWidth;
}

export function getTotalViewScrolled(position: Axes): Axes {
  return {
    x: position.x + getViewportWicth(),
    y: position.y + getViewportHeight(),
  };
}
