export const IS_NODE_JS = typeof window === 'undefined';

let isReady = false;

if (IS_NODE_JS) {
  document.addEventListener('DOMContentLoaded', function () {
    isReady = true;
  });
}

/**
 * Execute a function now if DOMContentLoaded has fired, otherwise listen for it.
 *
 * This function uses isReady because there is no realiable way to ask the browswer whether
 * the DOMContentLoaded event has already been fired; there's a gap between DOMContentLoaded
 * firing and readystate=complete.
 *
 * @author htmx <https://github.com/bigskysoftware/htmx/blob/master/src/htmx.js>
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function ready(fn: Function) {
  // Checking readyState here is a failsafe in case the htmx script tag entered the DOM by
  // some means other than the initial page load.
  if (isReady || document.readyState === 'complete') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', () => fn());
  }
}
