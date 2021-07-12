export interface ScrollableStickyArgs {
  el?: HTMLElement;
  elWrapper?: HTMLElement;
  elContainer?: HTMLElement;
  onUnpin?(): void;
  onPin?(): void;
  onUnfix?(): void;
  onFix?(): void;
}
