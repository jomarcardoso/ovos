const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  entry: {
    ['./src/interface/scroll-spy/sample/dist/index']:
      './src/interface/scroll-spy/sample/index.ts',
    ['./src/interface/page-progress/sample/dist/index']:
      './src/interface/page-progress/sample/index.ts',
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
    ['./src/utilities/element/sample/dist/index']:
      './src/utilities/element/sample/index.ts',
  },
  output: {
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
});
