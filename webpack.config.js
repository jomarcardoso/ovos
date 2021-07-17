const path = require('path');
const { merge } = require('webpack-merge');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const generateConfig = ({
  mode = 'production',
  bundle = false,
  entry = {
    ['./dist/ovos']: './src/ovos.ts',
    ['./samples/scripts/ovos']: './src/ovos.ts',
    ['./src/utilities/element/sample/dist/index']:
      './src/utilities/element/sample/index.ts',
    ['./src/api/scroll/sample/dist/index']:
      './src/api/scroll/sample/index.ts',
    ['./src/api/touch/sample/dist/index']:
      './src/api/touch/sample/index.ts',
    ['./src/interface/scroll-spy/sample/dist/index']:
      './src/interface/scroll-spy/sample/index.ts',
    ['./src/interface/fit-on-screen/sample/dist/index']:
      './src/interface/fit-on-screen/sample/index.ts',
    ['./src/interface/spin-images/sample/dist/index']:
      './src/interface/spin-images/sample/index.ts',
    ['./src/interface/sticky-header/sample/dist/index']:
      './src/interface/sticky-header/sample/index.ts',
    ['./src/interface/parallax/sample/dist/index']:
      './src/interface/parallax/sample/index.ts',
    ['./src/interface/scrollable-sticky/sample/dist/index']:
      './src/interface/scrollable-sticky/sample/index.ts',
  },
}) => {
  const config = {
    entry,
    mode,
    devtool: mode === 'production' ? 'source-map' : 'inline-source-map',
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname),
      libraryTarget: 'umd',
      library: 'ovos',
      globalObject: 'window',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
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
    externalsPresets: !bundle ? { node: true } : {},
    externals: !bundle ? [nodeExternals()] : [],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    plugins: [],
  };

  if (mode === 'production') {
    if (bundle) {
      config.output.filename = '[name].bundle.min.js';
    }
  } else {
    if (bundle) {
      config.output.filename = '[name].js';
    }
  }

  if (mode === 'development') {
    config.plugins.push(new ForkTsCheckerWebpackPlugin());
    config.module.rules.push({
      test: /\.([j|t]s)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    });
  } else {
    // new CleanWebpackPlugin({
    //   dry: true,
    // }),
  }

  return config;
};

module.exports = ({ mode = 'production', bundle = false } = {}) => {
  return generateConfig({ mode, bundle });
};
