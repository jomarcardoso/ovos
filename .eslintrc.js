module.exports = {
  extends: ['airbnb-typescript-prettier'],
  env: {
    jest: true,
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    worker: true,
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
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
      },
    },
  ],
};
