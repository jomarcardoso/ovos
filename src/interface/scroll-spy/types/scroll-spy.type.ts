interface ScrollSpyItemArgs {
  elMenu?: HTMLElement;
  elContent?: HTMLElement;
  callback?({ active: boolean }): void;
}

interface ScrollSpyItemReturn {
  activate(): void;
  deActivate(): void;
  content: HTMLElement;
}

export type ScrollSpyItem = (args: ScrollSpyItemArgs) => ScrollSpyItemReturn;

export enum Method {
  current,
  closest,
}
