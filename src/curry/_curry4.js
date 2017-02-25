var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');

/**
 * Returns a new function that when called with:
 * 0 args: returns 4-arity function (expects 4 more args).
 * 1 arg : returns 3-arity function (expects 3 more args).
 * 2 args: returns 2-arity function (expects 2 more args).
 * 3 args: returns 1-arity function (expects 1 more arg ).
 * 4 args: returns the result of calling <fn> like normal.
 *
 * @example
 *     var add4 = (a, b, c, d) => a + b + c + d;
 *     var curriedAdd4 = _curry4(add4);
 *     curriedAdd4(1)(2)(3)(4); //=> 10
 *     curriedAdd4(1, 2)(3)(4); //=> 10
 *     curriedAdd4(1)(2, 3)(4); //=> 10
 *     curriedAdd4(1)(2)(3, 4); //=> 10
 *     curriedAdd4(1, 2, 3, 4); //=> 10
 *
 * @see R.curry : Ramda's currying implementations github.com/ramda/ramda
 * @param {Function} fn - Function to curry.
 * @returns {Function} - <fn> curried.
 */
module.exports = function _curry4(fn) {
    return function arity4(a1, a2, a3, a4) {
        switch (arguments.length) {
            case 0:
                return arity4;
            case 1:
                return _curry3(function(_a2, _a3, _a4) {
                    return fn(a1, _a2, _a3, _a4);
                });
            case 2:
                return _curry2(function(_a3, _a4) {
                    return fn(a1, a2, _a3, _a4);
                });
            case 3:
                return function(_a4) {
                    return fn(a1, a2, a3, _a4);
                }
            default: // case 4:
                return fn(a1, a2, a3, a4);
        }
    };
}
