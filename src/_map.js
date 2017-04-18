var _curry2 = require('./_curry2');
var _reduce = require('./_reduce');

/**
 * Returns the result of applying a function to map some data structure.
 *
 * @example map(x => x + 1, { a: 1 }); //=> { a: 2 }
 * @example map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example map(toUpper, 'foo'); //=> 'FOO'
 * @example map(x => x * 2, y => y + 1)(3); //=> 7
 * @example map(x => x * 2, 100); //=> 200
 *
 * @param {Function} fn - Applied to the data structure.
 * @param {Array|Object|String|Function} mappable
 * @returns {Array|Object|String|Function}
 */
module.exports = _curry2(function _map(fn, mappable) {
    switch(Object.prototype.toString.call(mappable)) {
        case '[object Array]':
            return _reduce(function(accumList, element) {
                accumList[accumList.length] = fn(element);
                return accumList;
            }, [], mappable);
        case '[object Object]':
            return _reduce(function(accumObj, key) {
                accumObj[key] = fn(mappable[key], key);
                return accumObj;
            }, {}, Object.keys(mappable));
        case '[object String]':
            return _reduce(function(accumStr, character) {
                return accumStr + fn(character);
            }, '', mappable);
        case '[object Function]': // Pipe the functions.
            return function() {
                return mappable.call(this, fn.apply(this, arguments));
            };
        default:
            throw new TypeError('Unsupported type for mappable.');
    }
});
