var _curry2 = require('./util/_curry2');
var _curry3 = require('./util/_curry3');
var _slice = require('./util/_slice');

/**
 * Returns a new function that, when called with a subset of the original
 * functions arguments, returns a new function.
 *
 * @example C.curry((a, b, c, d) => a + b + c + d)(1)(2)(3)(5); //=> 17
 * @example C.curry((a, b, c) => a + b + c)(1)(2)(3); //=> 6
 * @example C.curry((a, b) => a + b)(1)(2); //=> 3
 *
 * @param {Function(*, *, ..., *) -> *} fn - N-ary function to curry.
 * @returns {Function(*)(*)(...)(*) -> *}
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

// NOTE: Double-slash comments are used here so this functions docs/comments
// are not parsed and included by the scripts/generateAPIDocs script.
//
// Repeatedly returns a function until `fn` receives a number of arguments
// equal to its arity.
//
// @private
// @param {Function(*, *, ..., *) -> *} fn - The function to curry.
// @param {Arguments} receivedArgs - The arguments received so far.
// @returns {Function}
function autoCurry(fn, receivedArgs) {
    return function() {
        var combinedArgs = _slice(receivedArgs).concat(_slice(arguments));
        return combinedArgs.length === fn.length
            ? fn.apply(this, combinedArgs)
            : autoCurry(fn, combinedArgs);
    };
}
