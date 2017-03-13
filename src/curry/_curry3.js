var _autoApply = require('./util/_autoApply');
var _curry2 = require('./_curry2');

/**
 * Returns a new function that when called with a subset of the original
 * functions arguments, returns a new function.
 *
 * @example
 *     var add3 = (a, b, c) => a + b + c;
 *     var curriedAdd3 = curry3(add3);
 *     curriedAdd3(1)(2)(3); //=> 6
 *     curriedAdd3(1, 2)(3); //=> 6
 *     curriedAdd3(1)(2, 3); //=> 6
 *     curriedAdd3(1, 2, 3); //=> 6
 *
 * @param {Function} fn - Function to curry.
 * @returns {Function}
 */
module.exports = function _curry3(fn) {
    return function _f() {
        switch (arguments.length) {
            case 0: return _f;
            case 1: return _curry2(_autoApply(fn, arguments));
            case 2: return _autoApply(fn, arguments);
            default: return fn.apply(this, arguments);
        }
    };
};
