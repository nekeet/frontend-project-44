import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigAirbnb from 'eslint-config-airbnb-base';

const airbnbRules = eslintConfigAirbnb.rules;

export default [
  {
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
  {
    files: ['*.js'], // Укажите типы файлов, которые хотите линтить
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...airbnbRules, // Включаем правила Airbnb
      // Добавьте свои правила или переопределения здесь, если необходимо
    },
  },
];
