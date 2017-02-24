var _curry2 = require('./curry/_curry2');

/**
 * Return true if <val> satisifies each function in <predicates>.
 *
 * @sig [(a -> Boolean)] -> a -> Boolean
 * @example _allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
 * @param {Array[Function]} predicates - Each is applied to <val> to return a Boolean.
 * @param {*} val - A piece of data.
 * @returns Boolean
 */
module.exports = _curry2(function _allPass(predicates, val) {
    var index = 0, len = predicates.length;
    while (index < len) {
        if (!predicates[index].call(this, val)) {
            return false;
        }
        index += 1;
    }
    return true;
});

