import { Axes } from '../axis';

export function getViewportHeight(): number {
  if (typeof window === 'undefined') return 0;

  return window.innerHeight;
}

export function getViewportWidth(): number {
  if (typeof window === 'undefined') return 0;

  return window.innerWidth;
}

export function getTotalViewScrolled(position: Axes): Axes {
  return {
    x: position.x + getViewportWidth(),
    y: position.y + getViewportHeight(),
  };
}
