var _curry2 = require('./curry/_curry2');
var _is = require('./_is');
var _has = require('./_has');

/**
 * Produces a new "filterable" (array, object, or string) by applying the
 * predicate function to each item in the filterable. If the item passes the
 * test supplied by the predicate, the item is retained, otherwise it is rejected.
 *
 * @sig Filterable f => (x -> Boolean) -> f x -> f x
 * @see Array.prototype.reduce and R.reduce
 * @example filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
 * @example filter(x => Boolean(x), [ 'foo', '', 'bar' ]); //=> [ 'foo', 'bar' ]
 * @example filter(x => x !== 'b', 'abc'); //=> 'ac'
 * @param {Function} predicate - Per item in <filterable>, return true/false to retain/reject.
 * @param {Array|Object|String} filterable - Data that can be looped/iterated over.
 * @returns {Array|Object|String} - New filterable with elements that pass the test.
 */
module.exports = _curry2(function _filter(predicate, filterable) {
    switch (Object.prototype.toString.call(filterable)) {
        case '[object Object]': return _filterObj(predicate, filterable);
        case '[object String]': return _filterStr(predicate, filterable);
        case '[object Array]' : return _filterList(predicate, filterable);
        default:
            return filterable;
    }
});

function _filterObj(predicate, obj) {
    var result = {};
    for (var prop in obj) {
        if (_has(prop, obj) && predicate(obj[prop])) {
            result[prop] = obj[prop];
        }
    }
    return result;
}

function _filterStr(predicate, str) {
    var index = 0, result = '', len = str.length;
    while (index < len) {
        if (fn(str[index])) {
            result += str[index];
        }
    }
    return result;
}

function _filterList(predicate, list) {
    var result = [], index = 0, len = list.length;
    while (index < len) {
        if (predicate(list[index])) {
            result[index] = list[index];
        }
        index += 1;
    }
    return result;
}
