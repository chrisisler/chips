var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');
var _curry4 = require('./_curry4');
var _curry5 = require('./_curry5');

/**
 * Returns a new function that when called with a subset of the original
 * functions arguments, returns a new function. Limited to 5 parameters.
 *
 * @param {Number} N - Number of arguments `fn` takes.
 * @param {Function} fn - A function to curry.
 * @returns {Function}
 */
module.exports = function _curryN(N, fn) {
    if (arguments.length !== 2) {
        throw new Error('Must supply both arguments to curryN.');
    }
    switch (N) {
        case 1: return function() { return fn.apply(this, arguments); };
        case 2: return _curry2(fn);
        case 3: return _curry3(fn);
        case 4: return _curry4(fn);
        case 5: return _curry5(fn);
        default: throw new Error('Number of arguments must be less than 5 and greater than zero');
    }
};
