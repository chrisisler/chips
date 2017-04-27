var _curry2 = require('./util/_curry2');

/**
 * Returns true if the `val` is the list `vals`, false otherwise.
 *
 * @example C.isIn([ 1, 2, 3 ], 5); //=> false
 * @example C.isIn([ 1, 2, 3 ], 3); //=> true
 *
 * @param {Array[*]} vals
 * @param {*} val - Any value.
 * @returns {Boolean} - If `vals` includes `val`.
 */
module.exports = _curry2(function _isIn(vals, val) {
    return Array.prototype.indexOf.call(vals, val) !== -1;
});
