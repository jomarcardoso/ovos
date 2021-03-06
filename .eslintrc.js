module.exports = {
  extends: ['airbnb-typescript-prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
};
