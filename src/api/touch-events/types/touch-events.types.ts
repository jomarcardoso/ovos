import { Axes } from '../../../types/types';

interface CallbackArgs {
  event: TouchEvent;
  position: Axes;
}

interface TouchEventsArgs {
  el?: HTMLElement;
  safeX?: number;
  safeY?: number;
  onDragTop?(args: CallbackArgs): void;
  onDragBottom?(args: CallbackArgs): void;
  onDragLeft?(args: CallbackArgs): void;
  onDragRight?(args: CallbackArgs): void;
  onGrab?(args: CallbackArgs): void;
  onDrag?(args: CallbackArgs): void;
  onDrop?(args: CallbackArgs): void;
  onDropTop?(args: CallbackArgs): void;
  onDropBottom?(args: CallbackArgs): void;
  onDropLeft?(args: CallbackArgs): void;
  onDropRight?(args: CallbackArgs): void;
}

export type TouchEvents = (args: TouchEventsArgs) => void;
