# eslint-config

This is my [ESLint](http://eslint.org) config. It is based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## .eslintrc.js
```js
module.exports = {
    extends: '@brummelte/eslint-config',
    env: {
        node: true,
        es6: true,
    },
};
```
