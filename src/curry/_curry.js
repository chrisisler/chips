var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');
var _curry4 = require('./_curry4');
var _curry5 = require('./_curry5');

/**
 * Returns a new function that when called with a subset of the original
 * functions arguments, returns a new function. `fn` is limited to 5 parameters.
 *
 * @param {Function} fn - A function to curry.
 * @returns {Function}
 */
module.exports = function _curry(fn) {
    switch (fn.length) {
        case 1: return function() { return fn.apply(this, arguments); };
        case 2: return _curry2(fn);
        case 3: return _curry3(fn);
        case 4: return _curry4(fn);
        case 5: return _curry5(fn);
        default: throw new Error('Number of arguments must be less than 5 and greater than zero');
    }
};
