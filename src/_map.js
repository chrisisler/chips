var _curry2 = require('./curry/_curry2');
var _is = require('./_is');
var _has = require('./_has');

/**
 * Given a function, <fn>, and a data structure to map, <mappable>,
 * return the results of applying <fn> to each value in the <mappable>.
 *
 * @sig (x -> y) -> x -> y
 * @example map(x => x + 1, { a: 1 }); //=> { a: 2 }
 * @example map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
 * @param {Function} fn - Invoked for each item in the data structure.
 * @param {Array|Object|String} mappable - A container of values.
 * @returns {Array|Object|String} - Another mappable container of values.
 */
module.exports = _curry2(function _map(fn, mappable) {
    if (_is('Object', mappable)) {
        return _mapObj(fn, mappable);
    } else if (_is('String', mappable)) {
        return _mapStr(fn, mappable);
    } else {
        return _mapList(fn, mappable)
    }
});

function _mapObj(fn, obj) {
    var result = {};
    for (var prop in obj) {
        if (_has(prop, obj)) {
            result[prop] = fn(obj[prop]);
        }
    }
    return result;
}

function _mapStr(fn, str) {
    var result = '', index = 0, len = str.length;
    while (index < len) {
        result += fn(str[index]);
        index += 1;
    }
    return result;
}

function _mapList(fn, list) {
    var len = list.length, index = 0, result = Array(len);
    while (index < len) {
        result[index] = fn(list[index]);
        index += 1;
    }
    return result;
}
