/**
 * Returns a new function that when called with:
 * 0 args: returns 1-arity function (expects 1 more arg ).
 * 1 arg : returns the result of calling <fn> like normal.
 *
 * @see R.curry : Ramda's currying implementations github.com/ramda/ramda
 * @param {Function} fn - Function to curry.
 * @returns {Function} - <fn> curried.
 */
module.exports = function _curry1(fn) {
    return function arity1(arg) {
        return (arguments.length === 0) ? arity1 : fn(arg);
    };
}
