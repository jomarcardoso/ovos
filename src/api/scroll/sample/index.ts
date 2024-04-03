import './main.scss';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { scroll, Scroll$ } from '..';
import { Axes } from '../../../utilities/axis';

const elDirection = document.querySelector('#direction');
const elTag = document.querySelector('#element');
const elX = document.querySelector('#x');
const elY = document.querySelector('#y');
const elGap: HTMLInputElement = document.querySelector(
  '#gap',
) as HTMLInputElement;
// // const rx = document.querySelector('#r-x');
// // const ry = document.querySelector('#r-y');

function start(gap: Axes = { x: 0, y: 0 }, debounce = 1000) {
  const scroll$ = scroll({ gap, debounce });

  console.log('começou com gap', gap);

  return scroll$.subscribe({
    next: ({ axes, el, direction }: Scroll$) => {
      if (elX) elX.innerHTML = String(axes.x);
      if (elY) elY.innerHTML = String(axes.y);
      if (elTag) elTag.innerHTML = el.tagName;
      if (elDirection) elDirection.innerHTML = direction;
    },
  });
}

let subscriber = start();

const gap$ = fromEvent<number>(elGap, 'change')
  // @ts-expect-error to test
  .pipe(map((event) => event.currentTarget.value));

gap$.subscribe((value = 0) => {
  subscriber.unsubscribe();
  subscriber = start({ y: Number(value), x: 0 });
});

// scrollCreator

// function handleScroll(args: OnScrollArgs) {
//   if (!direction || !x || !y || !element) return;

//   direction.innerHTML = args.direction;
//   x.innerHTML = String(args.scrollPosition.x);
//   y.innerHTML = String(args.scrollPosition.y);
//   element.innerHTML = args.scrollingElement.tagName;
// }

// ScrollEvents({
//   onScroll: handleScroll,
//   // onlyOnChangedDirection: true,
//   // onlyOnDirection: 'up',
//   gap: {
//     top: 300,
//     bottom: 300,
//   },
//   debounce: {
//     x: 30,
//     y: 30,
//   },
//   // lazyTime: 400,
// });
