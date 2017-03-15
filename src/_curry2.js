/**
 * Returns a new function that, when called with not enough of the original
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
    return function arity2(a1, a2) {
        switch (arguments.length) {
            case 0: return arity2;
            case 1: return function(_a2) { return fn(a1, _a2); };
            default: return fn.apply(this, arguments);
        }
    };
};
