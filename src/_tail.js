/**
 * Returns the given data containing every element except the zeroth.
 *
 * @example C.tail([ 1, 2, 3 ]); //=> [ 2, 3 ]
 *
 * @param {Array[*]} vals - A list of values.
 * @returns {Array[*]}
 */
module.exports = function _tail(vals) {
    return Array.prototype.slice.call(vals, 1);
};
