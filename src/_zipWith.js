var _curry3 = require('./_curry3');

/**
 * Return a new list by applying the given function to each equally-positioned
 * element in the given lists. Truncating to the list of shorter length.
 *
 * @param {Array} fn - Applied to each element in the given lists: (a, b) => c.
 * @param {Array} listA
 * @param {Array} listB
 * @returns {Array} - [ f(a[0], b[0]), ..., f(a[i], b[i]) ]
 */
module.exports = _curry3(function _zipWith(fn, listA, listB) {
    var len = Math.min(listA.length, listB.length);
    var result = Array(len);
    var index = 0;
    while (index < len) {
        result[index] = fn(listA[index], listB[index]);
        index += 1;
    }
    return result;
});
