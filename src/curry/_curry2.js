var _autoApply = require('./util/_autoApply');

/**
 * Returns a new function that when called with a subset of the original
 * functions arguments, returns a new function.
 *
 * @example
 *     var add2 = (a, b) => a + b;
 *     var curriedAdd2 = curry2(add2);
 *     curriedAdd2(1)(2); //=> 3
 *     curriedAdd2(1, 2); //=> 3
 *
 * @param {Function} fn - Function to curry.
 * @returns {Function}
 */
module.exports = function _curry2(fn) {
    return function _f() {
        switch (arguments.length) {
            case 0: return _f;
            case 1: return _autoApply(fn, arguments);
            default: return fn.apply(this, arguments);
        }
    };
};
