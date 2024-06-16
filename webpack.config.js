const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CONFIG_BY_TYPE = {
  libraryTarget: {
    global: 'umd',
    commonjs: 'commonjs',
    module: 'module'
  },
  globalObject: {
    global: 'window',
    commonjs: 'this',
    module: 'this'
  },
  filename: {
    global: 'ovos.js',
    commonjs: 'ovos.cjs',
    module: 'ovos.mjs'
  },
  externalsPresets: {
    global: {},
    commonjs: { node: true },
    module: { node: true }
  },
  outputModule: {
    global: false,
    commonjs: false,
    module: true
  },
  externals: {
    global: [],
    commonjs: [nodeExternals({
      importType: 'commonjs'
    })],
    module: [nodeExternals({
      importType: 'module',
      allowlist: [ /^lodash/]
    })]
  },
  library: {
    global: 'ovos',
    commonjs: undefined,
    module: undefined
  },
  entry: {
    global: './src/ovos.htmx.ts',
    commonjs: './src/ovos.ts',
    module: './src/ovos.ts'
  },
  configFile: {
    global: 'tsconfig.json',
    commonjs: 'tsconfig.cjs.json',
    module: 'tsconfig.json'
  }
};

const CONFIG_BY_MODE = {
  output_path: {
    development: path.resolve(__dirname, './www/scripts'),
    production: path.resolve(__dirname, './dist'),
  },
  devtool: {
    development: 'inline-source-map',
    production: 'source-map',
  },
};

const generateConfig = ({
  mode,
  type,
}) => {
  const config = {
    entry: CONFIG_BY_TYPE.entry[type],
    mode,
    devtool: CONFIG_BY_MODE.devtool[mode],
    output: {
      filename: CONFIG_BY_TYPE.filename[type],
      path: CONFIG_BY_MODE.output_path[mode],
      libraryTarget: CONFIG_BY_TYPE.libraryTarget[type],
      library: CONFIG_BY_TYPE.library[type],
      globalObject: CONFIG_BY_TYPE.globalObject[type],
    },
    experiments: {
      outputModule: CONFIG_BY_TYPE.outputModule[type]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: CONFIG_BY_TYPE.configFile[type]
              }
            }
          ],
          exclude: /node_modules/,
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
    externalsPresets: CONFIG_BY_TYPE.externalsPresets[type],
    externals: mode === 'development' ? [] : CONFIG_BY_TYPE.externals[type],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    // plugins: [new MiniCssExtractPlugin()],
    plugins: []
  };

  if (mode === 'development') {
    config.plugins.push(new ForkTsCheckerWebpackPlugin());
  } else {
    // new CleanWebpackPlugin({
    //   dry: true,
    // }),
  }

  return config;
};

module.exports = ({
  mode = 'development',
  type = 'global',
}) => {
  console.log(mode, type);
  return generateConfig({ mode, type });
};
