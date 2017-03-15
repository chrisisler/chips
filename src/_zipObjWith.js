var _curry3 = require('./_curry3');
var _reduce = require('./_reduce');

/**
 * Returns a new object by zipping a list of `keys` with a function, `fn`,
 * applied to a list of `values`.
 *
 * Note: Length of returned object is truncated to the length of the `keys`.
 *
 * @example
 *     var half = x => x / 2;
 *     _zipObjWith(half, [ 'k1', 'k2' ], [ 4, 6 ]); //=> { k1: 2, k2: 3 }
 *
 * @param {Function} fn - Applied to each value in `val`.
 * @param {Array[String]} keys - A list of strings, the keys of the new object.
 * @param {Array} vals - Each value in this list is transformed by `fn`.
 * @returns {Object} - The result of zipping `keys` with `fn` applied to `vals`.
 */
module.exports = _curry3(function _zipObjWith(fn, keys, vals) {
    if (keys.length === 0 || vals.length === 0) {
        return {};
    }
    fn = fn || function(x) { return x; };
    var index = 0;
    return _reduce(function(accumObj, key) {
        accumObj[key] = fn(vals[index]);
        index += 1;
        return accumObj;
    }, {}, keys);
});
