const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    ['./src/dist/ovo']: './src/ovo.ts',
    ['./src/anchor/dist/anchor']: './src/anchor/anchor.ts',
    ['./src/parallax/dist/parallax']: './src/parallax/parallax.ts',
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
