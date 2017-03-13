var _autoApply = require('./util/_autoApply');
var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');
var _curry4 = require('./_curry4');

/**
 * Returns a new function that when called with a subset of the original
 * functions arguments, returns a new function.
 *
 * @example
 *     var add5 = (a, b, c, d, e) => a + b + c + d + e;
 *     var curriedAdd5 = curry5(add5);
 *     curriedAdd5(1)(2)(3)(4)(5); //=> 15
 *     curriedAdd5(1, 2)(3)(4)(5); //=> 15
 *     curriedAdd5(1)(2, 3)(4)(5); //=> 15
 *     curriedAdd5(1)(2)(3, 4)(5); //=> 15
 *     curriedAdd5(1)(2)(3)(4, 5); //=> 15
 *     curriedAdd5(1, 2, 3, 4, 5); //=> 15
 *
 * @param {Function} fn - Function to curry.
 * @returns {Function}
 */
module.exports = function _curry5(fn) {
    return function _f() {
        switch (arguments.length) {
            case 0: return _f;
            case 1: return _curry4(_autoApply(fn, arguments));
            case 2: return _curry3(_autoApply(fn, arguments));
            case 3: return _curry2(_autoApply(fn, arguments));
            case 4: return _autoApply(fn, arguments);
            default: return fn.apply(this, arguments);
        }
    };
};
