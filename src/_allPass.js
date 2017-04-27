var _curry2 = require('./util/_curry2');

/**
 * Return true if the given value satisifies each function in `predicates`.
 *
 * @example C.allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
 *
 * @param {Array[Function(*) -> Boolean]} predicates - Each fn is applied to `val`.
 * @param {*} val - Any value.
 * @returns Boolean - True if each predicate function returns true when applied to `val`.
 */
module.exports = _curry2(function _allPass(predicates, val) {
    var index = 0;
    var len = predicates.length;
    while (index < len) {
        if (!predicates[index].call(this, val)) {
            return false;
        }
        index += 1;
    }
    return true;
});
