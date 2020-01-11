import ScrollEvents from './ScrollEvents';

const direction = document.querySelector('#direction');
const element = document.querySelector('#element');
const rx = document.querySelector('#r-x');
const ry = document.querySelector('#r-y');

function handleScroll(args) {
  direction.innerHTML = args.direction;
  rx.innerHTML = args.relativeScrollPosition.x;
  ry.innerHTML = args.relativeScrollPosition.y;
  element.innerHTML = args.scrollingElement.tagName;
}

ScrollEvents({
  onScroll: handleScroll,
  limit: {
    top: 0,
    bottom: 400
  }
});
