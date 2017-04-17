/**
 * Returns a copy of the given list.
 *
 * @param {Array} xs
 * @returns {Array}
 */
module.exports = function _slice(xs) {
    return Array.prototype.slice.call(xs);
};
