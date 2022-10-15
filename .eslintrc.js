module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    // 'sort-keys-fix',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    indent: [2, 2, { ignoredNodes: ['PropertyDefinition'] }],
    'no-shadow': 0,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-shadow': 2,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
  // overrides: [
  //   {
  //     files: ['packages/i18n/src/locales/*.ts'],
  //     rules: {
  //       'sort-keys-fix/sort-keys-fix': 'error',
  //       'react-i18n/rule-name': 'error',
  //     },
  //   },
  // ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules',
    'build',
    'dist',
    'webpack.config.js',
    'i18n',
    'generated.tsx',
  ],
};
