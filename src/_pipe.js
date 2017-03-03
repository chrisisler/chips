var _tail = require('./_tail');
var _reduce = require('./_reduce');

module.exports = function _pipe() {
    var fns = arguments;
    return function() {
        return _reduce(function(accumResult, fn) {
            return fn.call(this, accumResult);
        }, fns[0].apply(this, arguments), _tail(fns));
    };
};
