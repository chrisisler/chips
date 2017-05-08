var _curry2 = require('./util/_curry2');

/**
 * Returns true if a majority of the list elements satisfy the predicate.
 *
 * @example C.majority(s => s.endsWith('e'), ['same', 'name', 'no']); //=> true
 * @example C.majority(s => s.endsWith('e'), ['foo', 'bar', 'me']); //=> false
 *
 * @param {Function(*) -> Boolean} predicate - Applied to each value in `vals`
 *                                                       to produce a Boolean.
 * @param {Array[*]} vals - A list of values.
 * @returns {Boolean} - True if `predicate` returns true for more than half of
 *                                                       the values in `vals`.
 */
module.exports = _curry2(function _majority(predicate, vals) {
    var len = vals.length;
    var index = 0;
    var moreThanHalf = len % 2 === 0 ? (len / 2) + 1 : Math.ceil(len / 2);
    var numValuesPass = 0;
    while (index < len) {
        if (predicate(vals[index])) {
            numValuesPass += 1;
        }
        index += 1;
    }
    return numValuesPass >= moreThanHalf;
});
