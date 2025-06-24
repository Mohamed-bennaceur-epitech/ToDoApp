const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules'] },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      sourceType: 'commonjs',
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
];
