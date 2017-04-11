var _curry2 = require('./_curry2');

/**
 * Returns true if the value `x` is in the list `xs`, false otherwise.
 * TODO: Provide a custom implementation: `if (xs.includes === void 0)`
 *
 * @example isIn([ 1, 2, 3 ], 5); //=> false
 * @example isIn([ 1, 2, 3 ], 2); //=> true
 * @param {Array} xs - A list of values.
 * @param {*} x - A value.
 * @returns {Boolean} - If `xs` includes `x`.
 */
module.exports = _curry2(function _isIn(xs, x) {
    return Array.prototype.includes.call(xs, x);
});
