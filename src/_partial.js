var _curry2 = require('./util/_curry2');

/**
 * Given an function and a list of that functions arguments, returns a function
 * that will produce the result of calling the given function with the supplied
 * arguments.
 *
 * @example C.partial((x, y) => x + y, [ 3, 4 ])(); //=> 7
 * @example C.partial((x, y) => x + y)([ 3, 4 ])(); //=> 7
 * @example C.partial(typeof (x, y) => x + y)([ 3 ]); //=> 'function'
 *
 * @param {Function} fn
 * @param {Array[*]} fnArgs - A list of parameters to apply `fn` to.
 * @returns {Function() -> * } - `fn`, partially applied.
 */
module.exports = _curry2(function _partial(fn, fnArgs) {
    return function() {
        return fn.apply(this, fnArgs);
    };
});
