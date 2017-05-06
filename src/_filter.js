var _curry2 = require('./util/_curry2');
var _reduce = require('./_reduce');
var _concat = require('./_concat');

/**
 * Returns a new `filterable` containing values which satisfy the predicate.
 *
 * @example C.filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
 * @example C.filter(x => x >= 3, [ 1, 2, 3 ]); //=> [ 3 ]
 * @example C.filter(x => x === x.toUpperCase(), 'FooBar'); //=> 'FB'
 *
 * @param {Function(*, Number) -> Boolean} predicate - Returns true/false to retain/reject each value.
 * @param {Array[*]|Object|String} filterable - A list of values, Object, or String.
 * @returns {Array[*]|Object|String} - Only the most awesome elements from `filterable`.
 */
module.exports = _curry2(function _filter(predicate, filterable) {
    switch (Object.prototype.toString.call(filterable)) {
        case '[object Array]':
            return _reduce(function(accumList, element, index) {
                return predicate(element, index) ? _concat(accumList, [ element ]) : accumList;
            }, [], filterable);
        case '[object Object]':
            return _reduce(function(accumObj, prop) {
                if (predicate(filterable[prop], prop)) {
                    accumObj[prop] = filterable[prop];
                }
                return accumObj;
            }, {}, Object.keys(filterable));
        case '[object String]':
            return _reduce(function(accumStr, character, index) {
                return predicate(character, index) ? accumStr + character : accumStr;
            }, '', filterable);
        default:
            throw new TypeError(typeof filterable + 'is an unsupported type for filterable.');
    }
});
