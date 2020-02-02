const plugin = require('eslint-plugin-jest');
module.exports = {
    ...plugin.configs.recommended,
    env: {}
};
