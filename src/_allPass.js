var _curry2 = require('./util/_curry2');

/**
 * Return true if the given `value` satisifies each function in `predicates`.
 *
 * @example C.allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
 *
 * @param {Array[Function(*) -> Boolean]} predicates - Each fn applied to `val`
 * @param {Array[Function(*) -> Boolean]} predicates - A list of Boolean
 *                    returning functions. Each preciate is applied to `value`.
 * @param {*} val - A value of any type.
 * @returns Boolean - True if all predicates returned true, false otherwise.
 */

module.exports = _curry2(function _allPass(predicates, value) {
    var index = 0;
    var len = predicates.length;
    while (index < len) {
        if (!predicates[index].call(this, value)) {
            return false;
        }
        index += 1;
    }
    return true;
});
