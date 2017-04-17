var _curry3 = require('./_curry3');

/**
 * Return a new list by applying the given function to each equally-positioned
 * element in the given lists. Truncating to the list of shorter length.
 * TODO: Allow `fn` to be null/undef to zip normally (with C.flatten).
 *
 * @example zipBy((x, y) => x + y, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
 *
 * @param {Array} fn - Applied to each element in the given lists.
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array} - [ f(xs[0], ys[0]), ..., f(xs[i], ys[i]) ]
 */
module.exports = _curry3(function _zipBy(fn, xs, ys) {
    var len = Math.min(xs.length, ys.length);
    var result = Array(len);
    var index = 0;
    while (index < len) {
        result[index] = fn(xs[index], ys[index]);
        index += 1;
    }
    return result;
});
