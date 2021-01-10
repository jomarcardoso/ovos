const path = require('path');

module.exports = {
  entry: {
    ['./dist/ovo']: './src/ovo.ts',
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
  module: {
    rules: [
      {
        test: /\.([j|t]s)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
