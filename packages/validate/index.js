// import production from './dist/index';
import development from './src/index';

if (process.env.NODE_ENV === 'production') {
  // module.exports = production;
} else {
  module.exports = development;
}
