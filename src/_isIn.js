var _curry2 = require('./_curry2');

/**
 * Returns true if the value `x` is the list/string `group`, false otherwise.
 *
 * @example isIn([ 1, 2, 3 ], 5); //=> false
 * @example isIn([ 1, 2, 3 ], 2); //=> true
 * @param {Array|String} group
 * @param {*} x - A value.
 * @returns {Boolean} - If `group` includes `x`.
 */
module.exports = _curry2(function _isIn(group, x) {
    return Array.isArray(group)
        ? Array.prototype.includes.call(group, x)
        : String.prototype.includes.call(group, x);
});
