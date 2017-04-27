/**
 * Returns a new function that, when called with a subset of the original
 * functions arguments, returns a new function.
 *
 * @example _curry2((a, b) => a + b)(1)(2); //=> 3
 * @example _curry2((a, b) => a + b)(1, 2); //=> 3
 *
 * @private
 * @param {Function(*, *) -> *} fn - Binary function to curry.
 * @returns {Function(*)(*) -> *}
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
