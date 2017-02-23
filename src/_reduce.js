var _curry3 = require('./curry/_curry3');

/**
 * @example reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
 * @example reduce((acc, x) => acc + x, 0, { a: 1, b: 2 }); //=> 3
 * @param {Function} fn - Applied to the accumulated value per item in
 *                            <functor> to produce a final value.
 * @param {x} accumulator - The "accumulated" values initial state.
 * @param functor
 * @returns - The result of invoking <fn> on each item in <functor>.
 */
module.exports = _curry3(function _reduce(fn, accumulator, functor) {
    function _reduceList(fn, accumulator, list) {
        var index = 0;
        while (index < list.length) {
            accumulator = fn(accumulator, list[index]);
            index += 1;
        }
        return accumulator;
    }
    function getObjValues(obj) {
        var values = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                values[values.length] = obj[prop];
            }
        }
        return values;
    }

    if (functor.toString() === '[object Object]') {
        return _reduceList(fn, accumulator, getObjValues(functor));
    } else {
        return _reduceList(fn, accumulator, functor);
    }
});
