module.exports = {
  parser: '@babel/eslint-parser',
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
