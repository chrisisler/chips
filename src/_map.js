var _curry2 = require('./curry/_curry2');

/**
 * Given a function, <fn>, and a data structure to map, <functor>,
 * return the results of applying <fn> to each value in the <functor>.
 *
 * Functor f => (x -> y) -> f x -> f y
 * @example map(x => x + 1, { a: 1 }); //=> { a: 2 }
 * @example map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
 * @example map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
 * @param {Function} fn - Invoked for each item in the data structure.
 * @param {x} functor - A mappable "container" of values.
 * @returns {y} - Another mappable container of values. The results of
 *                    applying <fn> to every item in <functor>.
 */
module.exports = _curry2(function _map(fn, functor) {
    function _mapObj(fn, obj) {
        var result = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                result[prop] = fn(obj[prop]);
            }
        }
        return result;
    }
    function _mapStr(fn, str) {
        var result = '', index = 0;
        while (index < str.length) {
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

    if (functor.toString() === '[object Object]') {
        return _mapObj(fn, functor);
    } else if (typeof functor === 'string') {
        return _mapStr(fn, functor);
    } else {
        return _mapList(fn, functor)
    }
});
