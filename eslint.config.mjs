import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    extends: ['next', 'prettier', 'next/core-web-vitals'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      'prefer-const': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];