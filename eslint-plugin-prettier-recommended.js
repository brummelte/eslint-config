const plugin = require('eslint-plugin-prettier');

const { recommended } = plugin.configs;

module.exports = {
    ...recommended,
    extends: recommended.extends.map((config) =>
        config === 'prettier' ? require.resolve('eslint-config-prettier') : config,
    ),
};
