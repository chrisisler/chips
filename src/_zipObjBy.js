var _curry3 = require('./util/_curry3');
var _reduce = require('./_reduce');

/**
 * Returns a new object by zipping a list of `keys` with a function, `fn`,
 * which is applied to a list of `values` and `keys`.
 *
 * Note: The length of returned list is equal to the length of the `keys` list.
 *
 * @example C.zipObjBy(v => v / 2, ['k1', 'k2'], [4, 6]); //=> { k1: 2, k2: 3 }
 * @example C.zipObjBy((v, k) => v + k, ['id'], [682]); //=> { id: 'id682' }
 *
 * @param {Function(*, String) -> *} fn - Applied per equal-index key and val.
 * @param {Array[String]} keys - A list of strings, the keys of the new object.
 * @param {Array[*]} values - Each value in this list is mapped via `fn`.
 * @returns {Object} - An obj: keys=`keys` and values=`fn(values[i], keys[i])`.
 */
module.exports = _curry3(function _zipObjBy(fn, keys, values) {
    if (keys.length <= 0 || values.length <= 0) {
        return {};
    }
    fn = fn || function(x) { return x; };
    var index = 0;
    return _reduce(function(accumObj, key) {
        accumObj[key] = fn(values[index], key);
        index += 1;
        return accumObj;
    }, {}, keys);
});
