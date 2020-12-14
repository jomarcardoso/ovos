const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    // ['./src/dist/ovo']: './src/ovo.ts',
    // ['./src/anchor/public/dist/index']: './src/anchor/anchor.ts',
    ['./src/fit-on-screen/sample/dist/index']:
      './src/fit-on-screen/sample/index.ts',
    ['./src/sticky-header/sample/dist/index']:
      './src/sticky-header/sample/index.ts',
    ['./src/parallax/sample/dist/index']: './src/parallax/sample/index.ts',
    ['./src/scrollable-sticky/sample/dist/index']:
      './src/scrollable-sticky/sample/index.ts',
  },
  output: {
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.([j|t]s)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
});
