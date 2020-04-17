const path = require('path');

module.exports = {
  entry: {
    '/scroll-spy/dist/scroll-spy': './packages/scroll-spy/src/index.ts',
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
