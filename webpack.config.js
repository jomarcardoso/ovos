const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      globalObject: bundle ? 'window' : 'this',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.scss$/i,
          use: [
            'style-loader',
            // MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        // {
        //   test: /\.scss$/i,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     // Translates CSS into CommonJS
        //     'css-loader',
        //     // Compiles Sass to CSS
        //     'sass-loader',
        //   ],
        // },
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
    plugins: [new MiniCssExtractPlugin()],
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
