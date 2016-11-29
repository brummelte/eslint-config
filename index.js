module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:ava/recommended',
    ],
    plugins: [
        'import',
        'ava',
    ],
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
            MemberExpression: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
        }],
        'valid-jsdoc': 'error',
        strict: 'error',
        'no-sync': 'error',
        'no-inline-comments': 'error',
        'no-use-before-define': ['error', 'nofunc'],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'max-len': ['error', 150, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'import/order': ['error', {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        }],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
    },
};
