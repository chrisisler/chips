var _curry2 = require('./_curry2');

/**
 * Returns true if the value `x` is the list `xs`, false otherwise.
 *
 * @example isIn([ 1, 2, 3 ], 5); //=> false
 * @example isIn([ 1, 2, 3 ], 3); //=> true
 *
 * @param {Array} xs
 * @param {*} x - A value.
 * @returns {Boolean} - If `xs` includes `x`.
 */
module.exports = _curry2(function _isIn(xs, x) {
    return Array.prototype.indexOf.call(xs, x) !== -1;
});
