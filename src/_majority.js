var _allPass = require('./_allPass');
var _curry2 = require('./curry/_curry2');
var _is = require('./_is');

/**
 * Returns true if at least half of the values satisfy each function.
 *
 * @example _majority([ x => x % 2 === 1, x => x === 3 ], [ 3, 3, 2 ]); //=> true
 * @param {Function|Array[Function]} - Applied to each value to produce a Boolean.
 * @param {Array} values - A list of values.
 * @returns Boolean - If a majority (half or more) of the values in `values` return
 *                      true when applied to each `predicates` function.
 */
module.exports = _curry2(function _majority(predicates, values) {
    var index = 0;
    var numValuesPass = 0;
    var len = values.length;
    var majorityLen = Math.ceil(len / 2);

    if (_is('Function', predicates)) {
        predicates = [ predicates ];
    }

    while (index < len) {
        if (_allPass(predicates, values[index])) {
            numValuesPass += 1;
        }
        if (numValuesPass === majorityLen) {
            return true;
        }
        index += 1;
    }
    return false;
});
