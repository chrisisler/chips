var _curry3 = require('./_curry3');
var _flatten = require('./_flatten');

/**
 * Return a new list by applying the given function to each equally-positioned
 * element in the given lists. Truncating to the list of shorter length.
 *
 * If `fn` is falsy, use a pairing function then flatten the `result` array.
 * This allows for: @returns {Array} - [ xs[0], ys[0], ..., xs[i], ys[i] ]
 * Otherwise:  @returns {Array} - [ f(xs[0], ys[0]), ..., f(xs[i], ys[i]) ]
 *
 * @example zipBy((x, y) => x + y, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
 * @example zipBy(null, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
 *
 * @param {Array} fn - Applied to each element in the given lists.
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array}
 */
module.exports = _curry3(function _zipBy(fn, xs, ys) {
    var doFlatZip = !fn;
    if (doFlatZip === true) {
        fn = function(x, y) { return [ x, y ]; };
    }
    var len = Math.min(xs.length, ys.length);
    var result = Array(len);
    var index = 0;
    while (index < len) {
        result[index] = fn(xs[index], ys[index]);
        index += 1;
    }
    return doFlatZip === true ? _flatten(result) : result;
});
