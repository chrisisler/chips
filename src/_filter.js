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
 * @param {Function(*, Number|String) -> Boolean} predicate - Returns true or
 *                                           false to retain/reject each value.
 * @param {Array[*]|Object|String} filterable - Some data to filter through.
 * @returns {Array[*]|Object|String} - The selected elements from `filterable`.
 */
module.exports = _curry2(function _filter(predicate, filterable) {
    switch (Object.prototype.toString.call(filterable)) {
        case '[object Array]':
            return _reduce(function(accumList, element, index) {
                return predicate(element, index)
                    ? _concat(accumList, [ element ])
                    : accumList;
            }, [], filterable);
        case '[object Object]':
            return _reduce(function(accumObj, prop) {
                if (predicate(filterable[prop], prop)) {
                    accumObj[prop] = filterable[prop];
                }
                return accumObj;
            }, {}, Object.keys(filterable));
        case '[object String]':
            return _reduce(function(accumStr, _char, index) {
                return predicate(_char, index) ? accumStr + _char : accumStr;
            }, '', filterable);
        default:
            throw new TypeError(typeof filterable +
                'is an unsupported type for filterable.');
    }
});
