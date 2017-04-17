var _allPass = require('./_allPass');
var _curry2 = require('./_curry2');
var _is = require('./util/_is');

/**
 * Returns true if at least half of the values satisfy each function.
 *
 * @example _majority([ x => x % 2 === 1, x => x === 3 ], [ 3, 3, 2 ]); //=> true
 *
 * @param {Function|Array[Function]} - Applied to each value to produce a Boolean.
 * @param {Array} xs - A list of values.
 * @returns Boolean - If a majority (half or more) of the values in `xs` return
 *                      true when applied to each `predicates` function.
 */
module.exports = _curry2(function _majority(predicates, xs) {
    var index = 0;
    var len = xs.length;
    var numValsPass = 0;
    var majorityLen = Math.ceil(len / 2); // The number of values that must pass.

    if (_is('Function', predicates)) {
        predicates = [ predicates ];
    }

    while (index < len) {
        if (_allPass(predicates, xs[index])) {
            numValsPass += 1;
        }
        if (numValsPass === majorityLen) {
            return true;
        }
        index += 1;
    }
    return false;
});
