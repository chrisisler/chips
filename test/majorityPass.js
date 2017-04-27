var assert = require('assert');
var C = require('../index');

describe('majorityPass', function() {
    var isEven = function(x) { return x % 2 === 0; };
    var isOdd = function(x) { return x % 3 === 0; };
    var isNumber = function(x) { return x >> 0 === x; };

    it('returns true if more than half of the functions return true when applied to the given value', function() {
        assert.strictEqual(C.majorityPass([ isEven, isOdd, isNumber ], 'foo'), false);
        assert.strictEqual(C.majorityPass([ isEven, isOdd, isNumber ], 3), true);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.majorityPass([ isEven, isOdd, isNumber ]), 'function');

        assert.strictEqual(C.majorityPass([ isEven, isOdd, isNumber ])('foo'), false);
        assert.strictEqual(C.majorityPass([ isEven, isOdd, isNumber ])(3), true);
    });
});
