import ScrollEvents from '../scroll-events/scroll-events';
import { Position, OnScrollArgs } from '../types/types';

interface AnchorArgs {
  el?: Element;
  position: Partial<Position>;
}

export default function anchor({ el = document, position }: AnchorArgs): void {
  function handleScroll(scrollArgs: OnScrollArgs) {
    if (position)
  }

  ScrollEvents({
    el,
    onScroll: handleScroll,
  });
}

anchor({});
