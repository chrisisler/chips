var _curry3 = require('./util/_curry3');
var _reduce = require('./_reduce');

/**
 * Returns a new object by zipping a list of `keys` with a function, `fn`,
 * applied to a list of `values`.
 *
 * Note: The length of returned list is equal to the length of the `keys` list.
 *
 * @example C.zipObjBy(x => x / 2, [ 'k1', 'k2' ], [ 4, 6 ]); //=> { k1: 2, k2: 3 }
 * @example C.zipObjBy((val, key) => `${key} is ${val}`, ['id'], [682]); //=> { id: 'id is 682' }
 *
 * @param {Function(*, String) -> *} fn - Given each equal-index value and key, returns a new value.
 * @param {Array[String]} keys - A list of strings, the keys of the new object.
 * @param {Array[*]} vals - Each value in this list is mapped via `fn`.
 * @returns {Object} - The result of zipping `keys` with `fn` applied to `vals`.
 */
module.exports = _curry3(function _zipObjBy(fn, keys, vals) {
    if (keys.length <= 0 || vals.length <= 0) {
        return {};
    }
    fn = fn || function(x) { return x; };
    var index = 0;
    return _reduce(function(accumObj, key) {
        accumObj[key] = fn(vals[index], key);
        index += 1;
        return accumObj;
    }, {}, keys);
});
