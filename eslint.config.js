import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      sourceType: 'module', // All files treated as ES modules
      globals: globals.browser, // Browser globals like window, document, etc.
    },
    plugins: { js },
    extends: ['js/recommended'],
  },
]);
