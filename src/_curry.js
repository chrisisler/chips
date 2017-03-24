var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');

/**
 * Returns a new function that, when called with subset of the original
 * functions arguments, returns a new function.
 *
 * @param {Function} fn - Function to curry.
 * @returns {Function} - `fn`, curried.
 */
module.exports = function _curry(fn) {
    switch (fn.length) {
        case 2: return _curry2(fn);
        case 3: return _curry3(fn);
        default: return function() {
            return fn.length === arguments.length
                ? fn.apply(this, arguments)
                : autoCurry(fn, arguments);
        };
    }
};

/**
 * Repeatedly returns a function until `fn` receives a number of arguments equal to its arity.
 *
 * @private
 * @param {Function} fn - The function to curry.
 * @param {Arguments} receivedArgs - The arguments received so far.
 * @returns {Function}
 */
function autoCurry(fn, receivedArgs) {
    return function() {
        var combinedArgs = Array.from(receivedArgs).concat(Array.from(arguments));
        return combinedArgs.length === fn.length
            ? fn.apply(this, combinedArgs)
            : autoCurry(fn, combinedArgs);
    };
}
