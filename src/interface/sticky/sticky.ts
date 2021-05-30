import scrollEvents from '../../api/scroll-events/scroll-events';
import { OnScrollArgs } from '../../types/types';

export default function sticky({
  el = document.querySelector('[data-ovo="sticky"]'),
}): void {
  function handleScroll(onScrollArgs: OnScrollArgs) {
    console.log(el, onScrollArgs);
  }

  scrollEvents({
    onScroll: handleScroll,
  });
}
