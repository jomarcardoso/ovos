// ovos/src/utilities/scroll/scroll-behavior.ts

// Smooth scrolling is motion; whoever asks the system for less motion jumps instead.
export function preferredScrollBehavior(): ScrollBehavior {
  if (typeof window === 'undefined' || !window.matchMedia) return 'smooth';

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
}
