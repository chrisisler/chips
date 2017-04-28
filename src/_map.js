var _curry2 = require('./util/_curry2');
var _reduce = require('./_reduce');

/**
 * Returns the result of applying a function to map some data structure.
 *
 * @example C.map((v, k) => v + k, { a: 1 }); //=> { a: 'a1' }
 * @example C.map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example C.map((x, index) => index, ['baz']); //=> [ 0 ]
 * @example C.map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
 * @example C.map(x => x * 2, y => y + 1)(3); //=> 7
 * @example C.map(x => x * 2, 100); //=> 200
 *
 * @param {Function(*, Number|String) -> *} fn - Applied to the data structure.
 * @param {Array[*]|Object|String|Function} mappable
 * @returns {Array[*]|Object|String|Function}
 */
module.exports = _curry2(function _map(fn, mappable) {
    switch(Object.prototype.toString.call(mappable)) {
        case '[object Array]':
            return _reduce(function(accumList, element, index) {
                accumList[accumList.length] = fn(element, index);
                return accumList;
            }, [], mappable);

        case '[object Object]':
            return _reduce(function(accumObj, key) {
                accumObj[key] = fn(mappable[key], key);
                return accumObj;
            }, {}, Object.keys(mappable));

        case '[object String]':
            return _reduce(function(accumStr, character, index) {
                return accumStr + fn(character, index);
            }, '', mappable);

        case '[object Function]': // Pipe the functions.
            return function() {
                return mappable(fn.apply(this, arguments));
            };

        default:
            throw new TypeError('Unsupported type for mappable.');
    }
});
