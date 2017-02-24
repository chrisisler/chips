var _curry1 = require('./curry/_curry1');

module.exports = _curry1(function _values(obj) {
    var values = [];
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            values[values.length] = obj[prop];
        }
    }
    return values;
});
