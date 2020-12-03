const path = require('path');

module.exports = {
  entry: {
    // '/scroll-events/dist': './packages/scroll-events/src/index.ts',
    // '/to-fit/dist': './packages/to-fit/src/index.ts',
    '/ovo/dist': './packages/ovo/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'packages'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.([j|t]s)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};
