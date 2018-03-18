var _curry2 = require('./util/_curry2');
var _reduce = require('./_reduce');

/**
 * Returns the result of applying `fn` over all values in `x`.
 * Returns a new function that, when called, applies its arguments to `fn` and
 * `x`, in order.
 * If `x` is a function, a new function is returned which composes both
 * functions.
 *
 * @example C.map((v, k) => v + k, { a: 1 }); //=> { a: 'a1' }
 * @example C.map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example C.map((x, index) => index, ['baz']); //=> [ 0 ]
 * @example C.map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
 * @example C.map(x => x * 2, y => y + 1)(3); //=> 7
 * @example C.map(x => x * 2, 100); //=> 200
 *
 * @param {Function(*, Number|String) -> *} fn - Transforms `item`.
 * @param {Array[*]|Object|String|Function} x - Value that can be mapped over.
 * @returns {*} - The mapped result.
 */
module.exports = _curry2(function _map(fn, x) {
    switch (Object.prototype.toString.call(x)) {
        case '[object Array]':
            return _reduce(function(newList, val, index) {
                newList[newList.length] = fn(val, index);
                return newList;
            }, [], x);
        case '[object Object]':
            return _reduce(function(newObj, key) {
                newObj[key] = fn(x[key], key);
                return newObj;
            }, {}, Object.keys(x));
        case '[object String]':
            return _reduce(function(newStr, character, index) {
                return newStr + fn(character, index);
            }, '', x);
        case '[object Function]': // Pipe the functions.
            return function() {
                return x(fn.apply(fn, arguments));
            };
        default:
            throw new TypeError('Unsupported type for second parameter.');
    }
});
