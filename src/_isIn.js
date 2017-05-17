var _curry2 = require('./util/_curry2');

/**
 * Returns true if the `value` is the list `values`, false otherwise.
 *
 * @example C.isIn([ 1, 2, 3 ], 5); //=> false
 * @example C.isIn([ 1, 2, 3 ], 3); //=> true
 *
 * @param {Array[*]} values - A list of values of any type
 * @param {*} value - A value of any type.
 * @returns {Boolean} - True if `values` includes `value`, false otherwise.
 */
module.exports = _curry2(function _isIn(values, value) {
    return Array.prototype.indexOf.call(values, value) !== -1;
});
