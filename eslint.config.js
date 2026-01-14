import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
// import { globals } from '@eslint/eslintrc';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'prettier', // prettier와 충돌되는 ESLint 규칙 비활성화
    ],
    files: ['**/*.{ts,tsx}'],
    // languageOptions: {
    //   ecmaVersion: 2020,
    //   globals: globals.browser,
    // },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      quotes: 'off', // ESLint 기본 quotes 비활성화
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // JS에서도 single quote
          jsxSingleQuote: true, // JSX 속성도 single quote
          semi: true,
          trailingComma: 'es5',
        },
      ],
    },
  }
);
