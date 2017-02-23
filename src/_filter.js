var _curry2 = require('./curry/_curry2');

/**
 * Given a filtering function, <pred>, and a data structure to
 * filter/remove/reject elements from, return values from <functor> who satisfy
 * the predicate function.
 *
 * Functor f => (x -> Boolean) -> f x -> f x
 * @example filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
 * @example filter(x => Boolean(x), [ 'foo', '', 'bar' ]); //=> [ 'foo', 'bar' ]
 * @example filter(x => x !== 'b', 'abc'); //=> 'ac'
 * @param {Function} pred - Applied to <functor> to produce a Boolean.
 * @param {x} functor - Any data type that can be looped over (a "mappable").
 * @returns {x} - The result of applying <pred> to <functor> if the result of
 *                  that application is truth-y.
 */
module.exports = _curry2(function _filter(pred, functor) {
    function _filterObj(pred, obj) {
        var result = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && pred(obj[prop])) {
                result[prop] = obj[prop];
            }
        }
        return result;
    }
    function _filterStr(pred, str) {
        var index = 0, result = '';
        while (index < str.length) {
            if (fn(str[index])) {
                result += str[index];
            }
        }
        return result;
    }
    function _filterList(pred, list) {
        var result = [], index = 0;
        while (index < list.length) {
            // Shorthand for if-then.
            pred(list[index]) && result.push(list[index]);
            index++;
        }
        return result;
    }
    switch (Object.prototype.toString.call(functor)) {
        case '[object Object]': return _filterObj(pred, functor);
        case '[object String]': return _filterStr(pred, functor);
        case '[object Array]': return _filterList(pred, functor);
        default: return functor;
    }
});

