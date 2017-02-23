var _curry1 = require('./_curry1');
var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');
var _curry4 = require('./_curry4');
var _curry5 = require('./_curry5');

/**
 * A poor man's R.curryN() from Ramda.
 *
 * @see R.curryN
 * @see R.curry : Ramda's currying implementations github.com/ramda/ramda
 * @param {Number} N - Number of arguments <fn> is applied to.
 * @param {Function} fn - A function to curry.
 * @returns {Function} - <fn> curried.
 */
module.exports = function _curryN(N, fn) {
    switch (N) {
        case 1: return _curry1(fn);
        case 2: return _curry2(fn);
        case 3: return _curry3(fn);
        case 4: return _curry4(fn);
        case 5: return _curry5(fn);
        default:
            throw new Error('Number of arguments (arity) must be less than 5 and greater than zero');
    }
}

