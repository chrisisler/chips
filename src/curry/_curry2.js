/**
 * Returns a new function that when called with:
 * 0 args: returns 2-arity function (expects 2 more args).
 * 1 arg : returns 1-arity function (expects 1 more arg ).
 * 2 args: returns the result of calling <fn> like normal.
 *
 * @example
 *     var add2 = (a, b) => a + b;
 *     var curriedAdd2 = _curry2(add2);
 *     curriedAdd2(1)(2); //=> 3
 *     curriedAdd2(1, 2); //=> 3
 *
 * @see R.curry : Ramda's currying implementations github.com/ramda/ramda
 * @param {Function} fn - Function to curry.
 * @returns {Function} - <fn> curried.
 */
module.exports = function _curry2(fn) {
    return function arity2(a1, a2) {
        switch (arguments.length) {
            case 0:
                return arity2;
            case 1:
                return function(_a2) {
                    return fn(a1, _a2);
                };
            default: // case 2:
                return fn(a1, a2);
        }
    };
};
