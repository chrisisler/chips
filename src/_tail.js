/**
 * Note: Array.from translates array-like objects to arrays.
 * @param {Array} list
 * @returns {Array} - List containing all elements except the first element.
 */
module.exports = function _tail(list) {
    return Array.from(list).slice(1);
};
