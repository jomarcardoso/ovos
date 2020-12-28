import './element.service.scss';
import { Axes, Position } from '../../types/types';

import {
  ToggleScrollDisabled,
  ToggleDocumentScroll,
} from './types/element.service.types';
import { getViewportHeight } from '../view/view.service';

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

export function getMaxVerticalScroll(el: HTMLElement): number {
  return el.scrollHeight - el.clientHeight;
}

export function getMaxHorizontalScroll(el: HTMLElement): number {
  return el.scrollWidth - el.clientWidth;
}

export function getHeight(el: HTMLElement): number {
  return el.offsetHeight;
}

export function getOffsetOfTopOfDocument(el: HTMLElement): number {
  return el.offsetTop;
}

export function getCenterOffsetOfTopOfDocument(el: HTMLElement): number {
  return el.offsetTop + getHeight(el) / 2;
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
  const { bottom, left, top, right } = getPositionRelativeScreen(el);

  return {
    x: right - left,
    y: bottom - top,
  };
}

export function getElTop(el: HTMLElement): number {
  return el.offsetTop;
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
