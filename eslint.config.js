import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.node } },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'import/no-named-as-default': 'off',
      'import/extensions': ['error', 'ignorePackages', {
        js: 'always',
        jsx: 'never',
      }],
      'no-extra-semi': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'import/newline-after-import': ['error', { count: 1 }],
      'no-plusplus': 'off',
    },
  },
];
