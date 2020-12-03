const path = require('path');

module.exports = {
  collectCoverageFrom: [
    'src/*/**.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
