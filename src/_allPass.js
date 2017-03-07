var _curry2 = require('./curry/_curry2');

/**
 * Return true if `value` satisifies each function in `predicates`.
 *
 * @example _allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
 * @param {Array[Function]} predicates - Each is applied to `value` to return a Boolean.
 * @param {*} value
 * @returns Boolean
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
