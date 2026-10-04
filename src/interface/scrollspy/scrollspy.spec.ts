import { scrollspy } from './scrollspy';

function define(el: HTMLElement, props: Record<string, number>) {
  Object.entries(props).forEach(([key, value]) =>
    Object.defineProperty(el, key, { configurable: true, value }),
  );
}

function setup() {
  const container = document.createElement('div');
  const items = [0, 1000, 1800].map((offsetTop) => {
    const elMenu = document.createElement('a');
    const elContent = document.createElement('section');

    define(elContent, { offsetTop });
    container.append(elContent);

    return { elMenu, elContent };
  });

  define(container, { scrollHeight: 2000, clientHeight: 800, scrollTop: 0 });
  document.body.append(container);

  const scrollTo = (scrollTop: number) => {
    define(container, { scrollTop });
    container.dispatchEvent(new Event('scroll'));
  };

  const active = () =>
    items.findIndex(({ elMenu }) => elMenu.classList.contains('ovo-active'));

  return { container, items, scrollTo, active };
}

describe('scrollspy', () => {
  it('activates the section whose start was passed', () => {
    const { container, items, scrollTo, active } = setup();
    const controller = scrollspy({ list: items, elRelative: container });

    expect(active()).toBe(0);

    scrollTo(1100);
    expect(active()).toBe(1);

    controller.destroy();
  });

  it('activates the last section at the end of the scroll', () => {
    const { container, items, scrollTo, active } = setup();
    const controller = scrollspy({ list: items, elRelative: container });

    scrollTo(1200);
    expect(active()).toBe(2);

    controller.destroy();
  });
});
