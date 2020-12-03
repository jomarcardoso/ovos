import ScrollEvents, { Element } from '@ovo/scroll-events';

interface ToFitArgs {
  el?: Element;
}

export default function toFit({ el = document }: ToFitArgs): void {
  ScrollEvents({
    el,
    onScroll: console.log,
  });
}
