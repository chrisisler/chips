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
    return function arity3(a1, a2, a3) {
        switch (arguments.length) {
            case 0: return arity3;
            case 1: return _curry2(function(_a2, _a3) { return fn(a1, _a2, _a3); });
            case 2: return function(_a3) { return fn(a1, a2, _a3); };
            default: return fn.apply(this, arguments);
        }
    };
};
