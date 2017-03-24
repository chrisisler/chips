var _curry3 = require('./_curry3');

/**
 * Return a new list by applying the given function to each equally-positioned
 * element in the given lists. Truncating to the list of shorter length.
 *
 * @param {Array} fn - Applied to each element in the given lists: (a, b) => c.
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array} - [ f(xs[0], ys[0]), ..., f(xs[i], ys[i]) ]
 */
module.exports = _curry3(function _zipWith(fn, xs, ys) {
    var len = Math.min(xs.length, ys.length);
    var result = Array(len);
    var index = 0;
    while (index < len) {
        result[index] = fn(xs[index], ys[index]);
        index += 1;
    }
    return result;
});
