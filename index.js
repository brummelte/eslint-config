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
    ],
    plugins: ['react', 'ava', 'import', 'jsx-a11y', 'filenames', 'react-hooks'],
    env: { es6: true, node: true },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: { parameters: 1, body: 1 },
                FunctionExpression: { parameters: 1, body: 1 },
            },
        ],
        // Allow same precedence until https://github.com/airbnb/javascript/issues/1071 is solved
        'no-mixed-operators': ['error', { allowSamePrecedence: true }],
        strict: 'error',
        'no-sync': 'error',
        'no-inline-comments': 'error',
        'no-use-before-define': ['error', 'nofunc'],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'import/order': [
            'error',
            { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] },
        ],
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'function-paren-newline': ['error', 'consistent'],
    },
};
