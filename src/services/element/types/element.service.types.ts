interface ToggleScrollDisabledArgs {
  el?: HTMLElement;
  toggle?: boolean;
}

export type ToggleScrollDisabled = (args: ToggleScrollDisabledArgs) => void;

interface ToggleDocumentScrollArgs {
  toggle?: boolean;
}

export type ToggleDocumentScroll = (args: ToggleDocumentScrollArgs) => void;
