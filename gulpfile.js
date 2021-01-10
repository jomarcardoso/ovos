// const gulp = require('gulp');
const surge = require('gulp-surge');

/**
 * A number, or a string containing a number.
 * @typedef {Object} GulpSurgeOptions
 * @property {string} project
 * @property {string} domain
 */

function html(cb) {
  /** @type {Array<GulpSurgeOptions>} */
  const optionsList = [
    {
      project: './src/interface/anchor/sample/',
      domain: 'ovo-anchor.surge.sh',
    },
    {
      project: './src/interface/carousel/sample/',
      domain: 'ovo-carousel.surge.sh',
    },
    {
      project: './src/interface/fit-on-screen/sample/',
      domain: 'ovo-fit-on-screen.surge.sh',
    },
    {
      project: './src/interface/page-progress/sample/',
      domain: 'ovo-page-progress.surge.sh',
    },
    {
      project: './src/interface/parallax/sample/',
      domain: 'ovo-parallax.surge.sh',
    },
    {
      project: './src/interface/scroll-spy/sample/',
      domain: 'ovo-scroll-spy.surge.sh',
    },
    {
      project: './src/interface/scrollable-sticky/sample/',
      domain: 'ovo-scrollable-sticky.surge.sh',
    },
    {
      project: './src/interface/sticky-header/sample/',
      domain: 'ovo-sticky-header.surge.sh',
    },
  ];

  optionsList.forEach((options) => surge(options));

  cb();
}

exports.default = html;
