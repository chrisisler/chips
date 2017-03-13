var _autoApply = require('./util/_autoApply');
var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');

/**
 * Returns a new function that when called with a subset of the original
 * functions arguments, returns a new function.
 *
 * @example
 *     var add4 = (a, b, c, d) => a + b + c + d;
 *     var curriedAdd4 = curry4(add4);
 *     curriedAdd4(1)(2)(3)(4); //=> 10
 *     curriedAdd4(1, 2)(3)(4); //=> 10
 *     curriedAdd4(1)(2, 3)(4); //=> 10
 *     curriedAdd4(1)(2)(3, 4); //=> 10
 *     curriedAdd4(1, 2, 3, 4); //=> 10
 *
 * @param {Function} fn - Function to curry.
 * @returns {Function}
 */
module.exports = function _curry4(fn) {
    return function _f() {
        switch (arguments.length) {
            case 0: return _f;
            case 1: return _curry3(_autoApply(fn, arguments));
            case 2: return _curry2(_autoApply(fn, arguments));
            case 3: return _autoApply(fn, arguments);
            default: return fn.apply(this, arguments);
        }
    };
};
