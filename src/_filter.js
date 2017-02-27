var _curry2 = require('./curry/_curry2');
var _toStr = require('./_toStr');
var _concat = require('./_concat');
var _reduce = require('./_reduce');
var _assign = require('./_assign');

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
module.exports = _curry2(function _filter(predicate, filterable) {
    switch (_toStr(filterable)) {
        case '[object Array]': return _reduce(function(accumList, element) {
            return predicate(element) ? _concat(accumList, [ element ]) : accumList;
        }, [], filterable);
        case '[object Object]': return _reduce(function(accumObj, prop) {
            return predicate(filterable[prop]) ? _assign(accumObj, newObj(filterable, prop)) : accumObj;
        }, {}, Object.keys(filterable));
        case '[object String]': return _reduce(function(accumStr, character) {
            return predicate(character) ? accumStr += character : accumStr;
        }, '', filterable);
        default:
            throw new TypeError('Unsupported type for filterable.');
    }
});

function newObj(obj, prop) {
    var out = {};
    out[prop] = obj[prop];
    return out;
}
