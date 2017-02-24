var _curry1 = require('./curry/_curry1');

/**
 * Creates a new, curried function comprised of the supplied functions.
 *
 * Takes as arguments any number of functions, func1, func2, ..., funcN and
 * returns a curried function that, when supplied with data to operate on,
 * applies that data to each given function, in the order the functions are given.
 *
 * @example
 *     var adultNamesOver30 = _pipe(filter(adult => adult.age > 30), map(adult => adult.name));
 *     adultNamesOver30([ { name: 'karen', age: 32 }, { name: 'mike', age: 26 }]); //=> 'karen'
 *
 * @example
 *     var dataAsPair = _pipe(data => data.ip, data => Object.keys(data));
 *     dataAsPair({ id: 4405595, ip: "47.100.227.138" }); //=> [ 4405595, "47.100.227.138" ]
 *
 * @returns {Function} - A new, curried function.
 */
module.exports = function _pipe([functions]) {
    var functions = arguments,
        numOfFuncs = functions.length,
        index = 0;
    return _curry1(function() {
        var rollingResult = functions[index].apply(this, arguments);
        index += 1;
        while (index < numOfFuncs) {
            rollingResult = functions[index].call(this, rollingResult);
            index += 1;
        }
        return rollingResult;
    });
}
