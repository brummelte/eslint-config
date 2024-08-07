/* eslint-disable filenames/no-index */
const immutableDataConfig = require('./immutableDataConfig');

require('./eslint-patch');

module.exports = {
    parser: require.resolve('@babel/eslint-parser'),
    parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            presets: [require.resolve('@babel/preset-react')],
        },
    },
    extends: [
        require.resolve('./eslint-plugin-import-errors'),
        require.resolve('./eslint-plugin-import-warnings'),
        require.resolve('./eslint-plugin-jest-dom-recommended'),
        require.resolve('./eslint-plugin-jest'),
        require.resolve('./eslint-plugin-jsx-a11y'),
        require.resolve('./eslint-plugin-react'),
        'eslint:recommended',
        require.resolve('./eslint-plugin-prettier-recommended'),
    ],
    plugins: [
        'react',
        'import',
        'jsx-a11y',
        'jest',
        'filenames',
        'react-hooks',
        'eslint-plugin-functional',
    ],
    env: { es6: true, node: true },
    settings: {
        'import/ignore': ['node_modules'],
        'import/resolver': { node: { extensions: ['.js', '.jsx', '.mdx'] } },
        react: { version: 'detect' },
        jest: { version: 26 },
    },
    rules: {
        'arrow-body-style': ['error'],
        'filenames/match-exported': ['warn'],
        'filenames/match-regex': [
            'error',
            '^([A-Za-z\\.]([A-Za-z0-9])*(\\.test|\\.test\\.skip|\\.stories)?)|(webpack.config.babel)$',
        ],
        'filenames/no-index': ['warn'],
        'import/no-anonymous-default-export': ['error'],
        'import/no-extraneous-dependencies': ['error'],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                distinctGroup: true,
                warnOnUnassignedImports: false,
                alphabetize: { order: 'asc' },
            },
        ],
        'no-inline-comments': ['error'],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-return-await': ['error'],
        'no-shadow': ['error'],
        'no-sync': ['error'],
        'no-use-before-define': ['error', 'nofunc'],
        'no-var': ['error'],
        'object-shorthand': ['error'],
        'prefer-const': ['error'],
        'prefer-destructuring': ['error'],
        'prefer-template': ['error'],
        'prettier/prettier': [
            'error',
            { singleQuote: true, tabWidth: 4, printWidth: 100, trailingComma: 'all' },
        ],
        'react-hooks/exhaustive-deps': ['error'],
        'react-hooks/rules-of-hooks': ['error'],
        'react/display-name': ['off'],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-fragments': ['error'],
        'react/jsx-key': ['warn'],
        'react/no-array-index-key': ['warn'],
        'react/prop-types': ['warn', { skipUndeclared: true }],
        'react/require-default-props': ['off'],
        'react/self-closing-comp': ['error'],
        'react/void-dom-elements-no-children': ['error'],
        strict: ['error'],
        'one-var': ['error', 'never'],
        'import/newline-after-import': ['error'],
        'functional/immutable-data': ['error', immutableDataConfig],
        'no-console': ['error'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    overrides: [
        {
            // Lint jsx files
            files: ['*.jsx', '*.js'],
        },
        {
            files: [
                '*.test.js',
                'webpack.config.babel.js',
                'webpack.config.js',
                'webpack.config.ava.js',
            ],
            extends: [require.resolve('./eslint-plugin-testing-library-react')],
            rules: { 'import/no-extraneous-dependencies': ['error', { devDependencies: true }] },
        },
        {
            files: ['**/*.test.js'],
            env: { jest: true },
        },
    ],
};
