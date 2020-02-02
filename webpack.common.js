const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    // path: 'dist',
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
