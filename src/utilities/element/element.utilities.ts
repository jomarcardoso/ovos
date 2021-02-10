import './element.utilities.scss';
import { Axes, Element, Position } from '../../types/types';

import {
  ToggleScrollDisabled,
  ToggleDocumentScroll,
} from './types/element.utilities.types';
import { getViewportHeight } from '../view/view.utilities';

export const toggleScrollDisabled: ToggleScrollDisabled = ({
  el = document.documentElement,
  toggle: provisionalToggle,
}) => {
  const hasDataDisabled = el.dataset?.ovoNonScrollable === 'true';
  const toggle = provisionalToggle ?? !hasDataDisabled;

  function handlePreventScroll(event: Event): void {
    event.preventDefault();
  }

  if (toggle) {
    el.setAttribute('data-ovo-non-scrollable', 'true');
    el.addEventListener('touchmove', handlePreventScroll);
  } else {
    el.setAttribute('data-ovo-non-scrollable', 'false');
    el.removeEventListener('touchmove', handlePreventScroll);
  }

  return toggle;
};

export const toggleDocumentScroll: ToggleDocumentScroll = ({ toggle }) => {
  toggleScrollDisabled({ el: document.documentElement, toggle });

  return toggleScrollDisabled({ el: document.body, toggle });
};

export function getScrollingEl(
  target: HTMLElement | HTMLDocument,
): HTMLElement {
  const documentTarget = target as HTMLDocument;

  if (documentTarget.scrollingElement) {
    return documentTarget.scrollingElement as HTMLElement;
  }

  return target as HTMLElement;
}

export function getScrollParent(el: HTMLElement): Element {
  if (el == null) {
    return document;
  }

  const elHTML = el as HTMLElement;

  if (elHTML.scrollHeight > elHTML.clientHeight) {
    if (elHTML.tagName === 'BODY' || elHTML.tagName === 'HTML') {
      return document;
    }

    return elHTML;
  }

  return getScrollParent(elHTML.parentNode as HTMLElement);
}

export function getMaxVerticalScroll(el: HTMLElement): number {
  return el.scrollHeight - el.clientHeight;
}

export function getMaxHorizontalScroll(el: HTMLElement): number {
  return el.scrollWidth - el.clientWidth;
}

export function getHeight(el: HTMLElement): number {
  return el.offsetHeight;
}

export function getWidth(el: HTMLElement): number {
  return el.offsetWidth;
}

export function getLeft(el: HTMLElement): number {
  return el.offsetLeft;
}

export function getTop(el: HTMLElement): number {
  return el.offsetTop;
}

export function getPositionRelativeOfTheDocument(el: HTMLElement): Position {
  const top = getTop(el);
  const left = getLeft(el);
  const height = getHeight(el);
  const width = getWidth(el);

  return {
    top,
    left,
    bottom: top + height,
    right: left + width,
  };
}

export function getCenterRelativeTopOfDocument(el: HTMLElement): number {
  return getTop(el) + getHeight(el) / 2;
}

export function translate({
  el,
  position,
}: {
  el: HTMLElement;
  position: number;
}): void {
  // eslint-disable-next-line no-param-reassign
  el.style.transform = `translate3d(0, -${position}px, 0)`;
}

export function getPositionRelativeScreen(el: HTMLElement): Position {
  const { bottom, left, top, right } = el.getBoundingClientRect();

  return {
    bottom,
    left,
    top,
    right,
  };
}

export function getMiddleRelativeScreen(el: HTMLElement): Axes {
  const { left, top } = getPositionRelativeScreen(el);
  const height = getHeight(el);
  const width = getWidth(el);

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function isTopOfElementAboveOfViewport(el: HTMLElement): boolean {
  return getPositionRelativeScreen(el).top < 0;
}

export function isBottomOfElementBelowOfViewport(el: HTMLElement): boolean {
  return getPositionRelativeScreen(el).bottom > getViewportHeight();
}

export function isAboveAndBelowScreen(el: HTMLElement): boolean {
  return (
    isTopOfElementAboveOfViewport(el) && isBottomOfElementBelowOfViewport(el)
  );
}
