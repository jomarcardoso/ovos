const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    // ['./src/dist/ovo']: './src/ovo.ts',
    // ['./src/anchor/public/dist/index']: './src/anchor/anchor.ts',
    ['./src/interface/scroll-spy/sample/dist/index']:
      './src/interface/scroll-spy/sample/index.ts',
    ['./src/interface/fit-on-screen/sample/dist/index']:
      './src/interface/fit-on-screen/sample/index.ts',
    ['./src/interface/sticky-header/sample/dist/index']:
      './src/interface/sticky-header/sample/index.ts',
    ['./src/interface/parallax/sample/dist/index']:
      './src/interface/parallax/sample/index.ts',
    ['./src/interface/carousel/sample/dist/index']:
      './src/interface/carousel/sample/index.ts',
    ['./src/interface/scrollable-sticky/sample/dist/index']:
      './src/interface/scrollable-sticky/sample/index.ts',
    ['./src/interface/anchor/sample/dist/index']:
      './src/interface/anchor/sample/index.ts',
    ['./src/services/element/sample/dist/index']:
      './src/services/element/sample/index.ts',
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
