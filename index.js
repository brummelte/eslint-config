/* eslint-disable filenames/no-index */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        impliedStrict: true,
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:ava/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
        'prettier/react',
    ],
    plugins: ['react', 'ava', 'import', 'jsx-a11y', 'filenames', 'react-hooks'],
    env: { es6: true, node: true },
    settings: {
        'import/ignore': ['node_modules'],
        react: { version: 'detect' },
    },
    rules: {
        strict: ['error'],
        'filenames/match-exported': ['warn'],
        'filenames/match-regex': [
            'error',
            '^([A-Za-z]([A-Za-z0-9])*(\\.test|\\.test\\.skip|\\.stories)?)|(webpack.config.babel)$',
        ],
        'filenames/no-index': ['warn'],
        'import/no-anonymous-default-export': ['error'],
        'import/no-extraneous-dependencies': ['error'],
        'import/order': [
            'error',
            { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] },
        ],
        'no-inline-comments': ['error'],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-sync': ['error'],
        'no-use-before-define': ['error', 'nofunc'],
        'react-hooks/exhaustive-deps': ['warn'],
        'react-hooks/rules-of-hooks': ['error'],
        'react/display-name': ['off'],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-key': ['off'],
        'react/no-array-index-key': ['warn'],
        'react/prop-types': ['warn', { skipUndeclared: true }],
        'react/require-default-props': ['off'],
        'react/void-dom-elements-no-children': ['error'],
    },
    overrides: [
        {
            files: [
                '*.test.js',
                'webpack.config.babel.js',
                'webpack.config.js',
                'webpack.config.ava.js',
            ],
            rules: {
                'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            },
        },
    ],
};
