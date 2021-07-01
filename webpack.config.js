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
    ['./src/v2/api/scroll-observer/sample/dist/index']:
      './src/v2/api/scroll-observer/sample/index.ts',
    ['./src/v2/api/touch-observer/sample/dist/index']:
      './src/v2/api/touch-observer/sample/index.ts',
    ['./src/v2/interface/scroll-spy/sample/dist/index']:
      './src/v2/interface/scroll-spy/sample/index.ts',
    ['./src/v2/interface/page-progress/sample/dist/index']:
      './src/v2/interface/page-progress/sample/index.ts',
    ['./src/v2/interface/fit-on-screen/sample/dist/index']:
      './src/v2/interface/fit-on-screen/sample/index.ts',
    ['./src/v2/interface/spin-images/sample/dist/index']:
      './src/v2/interface/spin-images/sample/index.ts',
    ['./src/v2/interface/sticky-header/sample/dist/index']:
      './src/v2/interface/sticky-header/sample/index.ts',
    ['./src/v2/interface/parallax/sample/dist/index']:
      './src/v2/interface/parallax/sample/index.ts',
    ['./src/v2/interface/carousel/sample/dist/index']:
      './src/v2/interface/carousel/sample/index.ts',
    ['./src/v2/interface/scrollable-sticky/sample/dist/index']:
      './src/v2/interface/scrollable-sticky/sample/index.ts',
    ['./src/v2/interface/anchor/sample/dist/index']:
      './src/v2/interface/anchor/sample/index.ts',
    ['./src/v2/web-components/teste/sample/dist/index']:
      './src/v2/web-components/teste/sample/index.ts',
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
