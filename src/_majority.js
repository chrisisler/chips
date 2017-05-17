var _curry2 = require('./util/_curry2');

/**
 * Returns true if the `predicate` function returns true more than half of the
 * time when applied to each element in `values`.
 *
 * @example C.majority(s => s.endsWith('e'), ['same', 'name', 'no']); //=> true
 * @example C.majority(s => s.endsWith('e'), ['foo', 'bar', 'me']); //=> false
 *
 * @param {Function(*) -> Boolean} predicate - Applied per value in `values` to
 *                                                          produce a Boolean.
 * @param {Array[*]} values - A list of values of any type.
 * @returns {Boolean} - True if `predicate` returns true for more than half of
 *                                                      the values in `values`.
 */
module.exports = _curry2(function _majority(predicate, values) {
    var len = values.length;
    var index = 0;
    var moreThanHalf = len % 2 === 0 ? (len / 2) + 1 : Math.ceil(len / 2);
    var numValuesPass = 0;
    while (index < len) {
        if (predicate(values[index])) {
            numValuesPass += 1;
        }
        index += 1;
    }
    return numValuesPass >= moreThanHalf;
});
