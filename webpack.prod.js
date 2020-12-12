const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  entry: {
    ovo: './src/ovo.ts',
    anchor: './src/anchor/anchor.ts',
    parallax: './src/anchor/anchor.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
});
