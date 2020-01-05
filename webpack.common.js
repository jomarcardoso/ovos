const path = require('path');

module.exports = {
  entry: {
    index: './lib/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
  },
  module: {
    rules: [
      {
        test: /\.([j|t]s)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
