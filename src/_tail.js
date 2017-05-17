/**
 * Returns the given list retaining every element except the zeroth.
 *
 * @example C.tail([ 1, 2, 3 ]); //=> [ 2, 3 ]
 *
 * @param {Array[*]} values - A list of values.
 * @returns {Array[*]}
 */
module.exports = function _tail(values) {
    return Array.prototype.slice.call(values, 1);
};
