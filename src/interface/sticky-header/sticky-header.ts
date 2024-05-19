import './sticky-header.scss';
import { getHeight, getScrollParent, translate } from '../../utilities/element';
import { scroll, Scroll$ } from '../../api/scroll';

export function StickyHeader({
  el = document.querySelector('[data-ovo-sticky-header]'),
}: {
  el?: Element | null;
}): void {
  if (!el) return;

  const htmlEl = el as HTMLElement;

  function handleDocumentScroll({
    relativeAxes: { y: position = 0 },
  }: Scroll$) {
    translate({ el: htmlEl, position });

    if (getHeight(htmlEl) === position) {
      htmlEl.style.opacity = '0';

      return;
    }

    htmlEl.style.removeProperty('opacity');
  }

  function bindEvents() {
    if (!el) return;

    scroll({
      el: getScrollParent(htmlEl),
      maxRelative: {
        top: 0,
        bottom: getHeight(htmlEl),
        left: 0,
        right: 0,
      },
    })
      .pipe()
      .subscribe(handleDocumentScroll);
  }

  bindEvents();
}
