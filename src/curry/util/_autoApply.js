/**
 * @param {Function} fn
 * @param {Arguments} externalArgs
 * @returns {Function}
 */
module.exports = function autoApply(fn, externalArgs) {
    return function() {
        var internalArgs = Array.from(arguments);
        var comboArgs = Array.from(externalArgs).concat(internalArgs);
        return fn.apply(this, comboArgs);
    };
};
