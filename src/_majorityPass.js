var _curry2 = require('./util/_curry2');

/**
 * Returns true if more than half of the `predicates` return true when applied
 * to `value`.
 *
 * @example C.majorityPass([ isEven, isOdd, isNumber ], 42); //=> true
 * @example C.majorityPass([ isEven, isOdd, isObject ], 42); //=> false
 *
 * @param {Array[Function(*) -> Boolean]} predicates - A list of predicate fns.
 * @param {*} value - Any value.
 * @returns {Boolean} - True if `value` passes more than half the `predicates`.
 */
module.exports = _curry2(function _majorityPass(predicates, value) {
    var index = 0;
    var len = predicates.length;
    var moreThanHalf = (len % 2 === 0) ? (len / 2) + 1 : Math.ceil(len / 2);
    var numPredicatesPass = 0;
    while (index < len) {
        if (predicates[index].call(this, value)) {
            numPredicatesPass += 1;
        }
        index += 1;
    }
    return numPredicatesPass >= moreThanHalf;
});
