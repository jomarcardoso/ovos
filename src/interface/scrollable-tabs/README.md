# 🥚 Scrollable Tabs

When the tab list has many items and it need a scroll... and you press tab to focus the next item but half of him be hired... Use Scrollable Tabs to fix it, to both directions.

Sample in https://jomarcardoso.github.io/ovos/www/scrollable-tabs.html

## Usage

### HTML + JS

```html
<ul id="scrollable-tabs">
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ul>
```

```js
import { ScrollableTabs } from 'ovos';

ScrollableTabs({ el: document.querySelector('#scrollable-tabs') });
```
