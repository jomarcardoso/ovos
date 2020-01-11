import ScrollEvents from './ScrollEvents';

const direction = document.querySelector('#direction');
const element = document.querySelector('#element');
const x = document.querySelector('#x');
const y = document.querySelector('#y');
const rx = document.querySelector('#r-x');
const ry = document.querySelector('#r-y');

function handleScroll(args) {
  direction.innerHTML = args.direction;
  x.innerHTML = args.scrollPosition.x;
  y.innerHTML = args.scrollPosition.y;
  element.innerHTML = args.scrollingElement.tagName;
}

ScrollEvents({
  onScroll: handleScroll,
  // onlyOnChangedDirection: true,
  // onlyOnDirection: 'up',
  gap: {
    top: 300,
    bottom: 300
  },
  debounce: {
    x: 30,
    y: 30
  },
  // lazyTime: 400,
});
