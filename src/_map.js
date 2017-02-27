var _curry2 = require('./curry/_curry2');
var _reduce = require('./_reduce');

/**
 * Returns the result of applying a function to map some data structure.
 *
 * @example map(x => x + 1, { a: 1 }); //=> { a: 2 }
 * @example map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example map(toUpper, 'foo'); //=> 'FOO'
 * @example map(x => x * 2, y => y + 1)(3); //=> 7
 *
 * @param {Function} fn - Applied to the mappable.
 * @param {Array|Object|String|Function} mappable
 * @returns {Array|Object|String|Function}
 */
module.exports = _curry2(function _map(fn, mappable) {
    switch(Object.prototype.toString.call(mappable)) {
        case '[object Array]': return _reduce(function(accumList, element) {
            accumList[accumList.length] = fn(element);
            return accumList;
        }, [], mappable);
        case '[object Object]': return _reduce(function(accumObj, prop) {
            accumObj[prop] = fn(mappable[prop]);
            return accumObj;
        }, {}, Object.keys(mappable));
        case '[object String]': return _reduce(function(accumStr, character) {
            return accumStr + fn(character);
        }, '', mappable);
        case '[object Function]': return function() { // Pipe the functions.
            return mappable.call(this, fn.apply(this, arguments));
        };
        default:
            throw new TypeError('Unsupported type for mappable.');
    }
});
