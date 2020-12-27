interface ScrollSpyItemArgs {
  elMenu?: HTMLElement;
  elContent?: HTMLElement;
  callback?({ active: boolean }): void;
}

export interface ScrollSpyItem {
  activate(): void;
  deActivate(): void;
  content: HTMLElement;
}

export type CreateScrollSpyItem = (args: ScrollSpyItemArgs) => ScrollSpyItem;

export enum Method {
  current,
  closest,
}
