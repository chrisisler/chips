var _curry2 = require('./util/_curry2');
var _reduce = require('./_reduce');

/**
 * Returns the result of applying `fn` over all values in `item`.
 * Returns a new function that, when called, applies its arguments to `fn` and
 * `item`, in order.
 *
 * @example C.map((v, k) => v + k, { a: 1 }); //=> { a: 'a1' }
 * @example C.map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example C.map((x, index) => index, ['baz']); //=> [ 0 ]
 * @example C.map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
 * @example C.map(x => x * 2, y => y + 1)(3); //=> 7
 * @example C.map(x => x * 2, 100); //=> 200
 *
 * @param {Function(*, Number|String) -> *} fn - Transforms `item`.
 * @param {Array[*]|Object|String|Function} item
 * @returns {Array[*]|Object|String|Function}
 */
module.exports = _curry2(function _map(fn, item) {
    switch(Object.prototype.toString.call(item)) {
        case '[object Array]':
            return _reduce(function(newList, val, index) {
                newList[newList.length] = fn(val, index);
                return newList;
            }, [], item);
        case '[object Object]':
            return _reduce(function(newObj, key) {
                newObj[key] = fn(item[key], key);
                return newObj;
            }, {}, Object.keys(item));
        case '[object String]':
            return _reduce(function(newStr, character, index) {
                return newStr + fn(character, index);
            }, '', item);
        case '[object Function]': // Pipe the functions.
            return function() {
                return item(fn.apply(this, arguments));
            };
        default:
            throw new TypeError('Unsupported type for item.');
    }
});
