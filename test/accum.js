var assert = require('assert');
var C = require('../index');

describe('accum', function() {
    var add = function(a, b) { return a + b; };
    var subtract = function(a, b) { return a - b;  };

    var nums = [ 1, 2, 3 ];

    it('returns the result of `reduce` without supplying an initial accumulator', function() {
        assert.strictEqual(C.accum(add, nums), 6);
        assert.strictEqual(C.accum(subtract, nums), -4);
        assert.strictEqual(C.accum(C.concat, 'foo'), 'foo');
    });

    it('returns undefined if `reducable` is empty', function() {
        assert.strictEqual(C.accum(add, []), undefined);
        assert.strictEqual(C.accum(C.concat, ''), undefined);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.accum(add), 'function');
        assert.strictEqual(typeof C.accum(subtract), 'function');
        assert.strictEqual(typeof C.accum(C.concat), 'function');

        assert.strictEqual(C.accum(add)(nums), 6);
        assert.strictEqual(C.accum(subtract)(nums), -4);
        assert.strictEqual(C.accum(C.concat)('foo'), 'foo');
    });
});
