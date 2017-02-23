var _curry1 = require('./_curry1');
var _curry2 = require('./_curry2');

/**
 * Returns a new function that when called with:
 * 0 args: returns 3-arity function (expects 3 more args).
 * 1 arg : returns 2-arity function (expects 2 more args).
 * 2 args: returns 1-arity function (expects 1 more arg ).
 * 3 args: returns the result of calling <fn> like normal.
 *
 * @example
 *     var add3 = (a, b, c) => a + b + c;
 *     var curriedAdd3 = _curry3(add3);
 *     curriedAdd3(1)(2)(3); //=> 6
 *     curriedAdd3(1, 2)(3); //=> 6
 *     curriedAdd3(1)(2, 3); //=> 6
 *     curriedAdd3(1, 2, 3); //=> 6
 *
 * @see R.curry : Ramda's currying implementations github.com/ramda/ramda
 * @param {Function} fn - Function to curry.
 * @returns {Function} - <fn> curried.
 */
module.exports = function _curry3(fn) {
    return function arity3(a1, a2, a3) {
        switch (arguments.length) {
            case 0:
                return arity3;
            case 1:
                return _curry2(function(_a2, _a3) {
                    return fn(a1, _a2, _a3);
                });
            case 2:
                return _curry1(function(_a3) {
                    return fn(a1, a2, _a3);
                });
            default: // case 3:
                return fn(a1, a2, a3);
        }
    }
}
