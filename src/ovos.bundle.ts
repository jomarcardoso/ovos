import {
  htmxAnchor,
  htmxCarousel,
  htmxPageProgress,
  htmxParallax,
  htmxScrollableSticky,
  htmxScrollspy,
  htmxSpinImages,
  htmxStickyHeader,
} from './interface';
import { htmxScrollableTabs } from './interface/scrollable-tabs/scrollable-tabs.htmx';
import { ready } from './utilities/document';

export * from './ovos';

ready(htmxScrollspy);
ready(htmxScrollableSticky);
ready(htmxAnchor);
ready(htmxCarousel);
ready(htmxPageProgress);
ready(htmxParallax);
ready(htmxScrollableTabs);
ready(htmxSpinImages);
ready(htmxStickyHeader);
