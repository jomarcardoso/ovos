const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  entry: {
    ovo: './src/ovo.ts',
    // anchor: './src/anchor/anchor.ts',
    // parallax: './src/parallax/parallax.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
});
