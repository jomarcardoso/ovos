module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    // path: 'dist',
    libraryTarget: 'umd',
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
