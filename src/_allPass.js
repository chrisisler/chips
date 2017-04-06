var _curry2 = require('./_curry2');

/**
 * Return true if the given value satisifies each function in `predicates`.
 *
 * @example _allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
 * @param {Array[Function]} predicates - Each is applied to the given value to return a Boolean.
 * @param {*} x
 * @returns Boolean
 */
module.exports = _curry2(function _allPass(predicates, x) {
    var index = 0;
    var len = predicates.length;
    while (index < len) {
        if (!predicates[index].call(this, x)) {
            return false;
        }
        index += 1;
    }
    return true;
});
