var _curry2 = require('./_curry2');
var _reduce = require('./_reduce');
var _concat = require('./_concat');

/**
 * Returns a new "filterable" containing values which satisfy the predicate.
 *
 * @example filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
 * @example filter(x => x >= 3, [ 1, 2, 3 ]); //=> [ 3 ]
 * @example filter(x => x === x.toUpperCase(), 'FooBar'); //=> 'FB'
 * @param {Function} predicate - Returns true/false to retain/reject each value.
 * @param {Array|Object|String} filterable
 * @returns {Array|Object|String}
 */
var _filter = _curry2(function(predicate, filterable) {
    switch (Object.prototype.toString.call(filterable)) {
        case '[object Array]':
            return _reduce(function(accumList, element) {
                return predicate(element) ? _concat(accumList, [ element ]) : accumList;
            }, [], filterable);
        case '[object Object]':
            return _reduce(function(accumObj, prop) {
                if (predicate(filterable[prop])) {
                    accumObj[prop] = filterable[prop];
                }
                return accumObj;
            }, {}, Object.keys(filterable));
        case '[object String]':
            return _reduce(function(accumStr, character) {
                return predicate(character) ? accumStr + character : accumStr;
            }, '', filterable);
        default:
            throw new TypeError('Unsupported type for filterable.');
    }
});

module.exports = _filter;
