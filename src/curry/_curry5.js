var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');
var _curry4 = require('./_curry4');

/**
 * Returns a new function that when called with:
 * 0 args: returns 5-arity function (expects 5 more args).
 * 1 arg : returns 4-arity function (expects 4 more args).
 * 2 args: returns 3-arity function (expects 3 more args).
 * 3 args: returns 2-arity function (expects 2 more args).
 * 4 args: returns 1-arity function (expects 1 more arg ).
 * 5 args: returns the result of calling <fn> like normal.
 *
 * @example
 *     var add5 = (a, b, c, d, e) => a + b + c + d + e;
 *     var curriedAdd5 = _curry5(add5);
 *     curriedAdd5(1)(2)(3)(4)(5); //=> 15
 *     curriedAdd5(1, 2)(3)(4)(5); //=> 15
 *     curriedAdd5(1)(2, 3)(4)(5); //=> 15
 *     curriedAdd5(1)(2)(3, 4)(5); //=> 15
 *     curriedAdd5(1)(2)(3)(4, 5); //=> 15
 *     curriedAdd5(1, 2, 3, 4, 5); //=> 15
 *
 * @see R.curry : Ramda's currying implementations github.com/ramda/ramda
 * @param {Function} fn - Function to curry.
 * @returns {Function} - <fn> curried.
 */
module.exports = function _curry5(fn) {
    return function arity5(a1, a2, a3, a4, a5) {
        switch (arguments.length) {
            case 0:
                return arity5;
            case 1:
                return _curry4(function(_a2, _a3, _a4, _a5) {
                    return fn(a1, _a2, _a3, _a4, _a5);
                });
            case 2:
                return _curry3(function(_a3, _a4, _a5) {
                    return fn(a1, a2, _a3, _a4, _a5);
                });
            case 3:
                return _curry2(function(_a4, _a5) {
                    return fn(a1, a2, a3, _a4, _a5);
                });
            case 4:
                return function(_a5) {
                    return fn(a1, a2, a3, a4, _a5);
                };
            default: // case 5:
                return fn(a1, a2, a3, a4, a5);
        }
    };
};
