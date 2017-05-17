var _curry2 = require('./util/_curry2');
var _reduce = require('./_reduce');
var _concat = require('./_concat');

/**
 * Returns a copy of the given value, `item`, which now contains only the
 * sub-values which returned true when passed to `predicate`.
 * Applies the given function to each element of an Array, each value of an
 * Object, and each character of a String.
 *
 * @example C.filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
 * @example C.filter(x => x >= 3, [ 1, 2, 3 ]); //=> [ 3 ]
 * @example C.filter(x => x === x.toUpperCase(), 'FooBar'); //=> 'FB'
 *
 * @param {Function(*, Number|String) -> Boolean} predicate - Returns true or
 *                             false to retain/reject each value, respectively.
 * @param {Array[*]|Object|String} item - Some data to filter through.
 * @returns {Array[*]|Object|String} - The selected elements from `item`.
 */
module.exports = _curry2(function _filter(predicate, item) {
    switch (Object.prototype.toString.call(item)) {

        case '[object Array]':
            return _reduce(function(accumList, element, index) {
                return predicate(element, index)
                    ? _concat(accumList, [ element ])
                    : accumList;
            }, [], item);

        case '[object Object]':
            return _reduce(function(accumObj, prop) {
                if (predicate(item[prop], prop)) {
                    accumObj[prop] = item[prop];
                }
                return accumObj;
            }, {}, Object.keys(item));

        case '[object String]':
            return _reduce(function(accumStr, _char, index) {
                return predicate(_char, index) ? accumStr + _char : accumStr;
            }, '', item);

        default:
            throw new TypeError(typeof item +
                'is an unsupported type for item.');
    }
});
