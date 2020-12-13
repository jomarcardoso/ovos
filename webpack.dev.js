const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    // ['./src/dist/ovo']: './src/ovo.ts',
    // ['./src/anchor/public/dist/index']: './src/anchor/anchor.ts',
    ['./src/parallax/public/dist/index']: './src/parallax/public/index.ts',
    ['./src/scrollable-sticky/public/dist/index']:
      './src/scrollable-sticky/public/index.ts',
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
