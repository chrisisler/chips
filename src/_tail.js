/**
 * Returns the given data containing every element or character except the zeroth.
 *
 * @example tail([ 1, 2, 3 ]); //=> [ 2, 3 ]
 *
 * @param {Array} xs
 * @returns {Array}
 */
module.exports = function _tail(xs) {
    return Array.prototype.slice.call(xs, 1);
};
