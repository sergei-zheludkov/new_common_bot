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
    indent: [2, 2, { ignoredNodes: ['PropertyDefinition'], SwitchCase: 1 }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    camelcase: 0,
    'no-shadow': 0,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
  overrides: [
    {
      files: ['packages/i18n/src/**/*.ts'],
      rules: { 'max-len': 0 },
    },
  ],
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
    'generated.tsx',

    'packages/*/.env',
    'packages/*/dist',
    'packages/*/node_modules',
    'packages/*/storage',
  ],
};
