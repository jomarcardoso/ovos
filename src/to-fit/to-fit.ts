import ScrollEvents, { Element } from '../scroll-events/scroll-events';

console.log('fit');

interface ToFitArgs {
  el?: Element;
}

export default function toFit({ el = document }: ToFitArgs): void {
  ScrollEvents({
    el,
    onScroll: console.log,
  });
}
