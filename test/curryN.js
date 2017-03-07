var assert = require('assert');
var C = require('../index');

function toStr(x) {
    return Object.prototype.toString.call(x);
}

describe('curryN', function() {
    var addThree = function(x, y, z) { return x + y + z; };
    var curriedAddThree = C.curryN(3, addThree);

    var expected = '[object Function]';

    it('returns a function expecting the supplied functions remaining arguments', function() {
        assert.strictEqual(toStr(curriedAddThree), expected);
        assert.strictEqual(toStr(curriedAddThree(1)), expected);

        assert.strictEqual(toStr(curriedAddThree(1)(2)), expected);
        assert.strictEqual(toStr(curriedAddThree(1, 2)), expected);
    });

    it('curries the given supplied function', function() {
        assert.strictEqual(curriedAddThree(1)(2)(3), 6);
        assert.strictEqual(curriedAddThree(1, 2)(3), 6);
        assert.strictEqual(curriedAddThree(1)(2, 3), 6);
        assert.strictEqual(curriedAddThree(1, 2, 3), 6);
    });

    it('throws when not given two arguements', function() {
        assert.throws(
            function() { C.curryN('foo'); },
            Error
        );
        assert.throws(
            function() { C.curryN(); },
            Error
        );
    });
});
