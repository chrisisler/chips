var assert = require('assert');
var C = require('../index');

describe('fold', function() {
    var add = function(a, b) { return a + b; };
    var subtract = function(a, b) { return a - b;  };

    var nums = [ 1, 2, 3 ];

    it('returns the result of `reduce` without supplying an initial accumulator', function() {
        assert.strictEqual(C.fold(add, nums), 6);
        assert.strictEqual(C.fold(subtract, nums), -4);
        assert.strictEqual(C.fold(C.concat, 'foo'), 'foo');
    });

    it('returns undefined if `reducable` is empty', function() {
        assert.strictEqual(C.fold(add, []), undefined);
        assert.strictEqual(C.fold(C.concat, ''), undefined);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.fold(add), 'function');
        assert.strictEqual(typeof C.fold(subtract), 'function');
        assert.strictEqual(typeof C.fold(C.concat), 'function');

        assert.strictEqual(C.fold(add)(nums), 6);
        assert.strictEqual(C.fold(subtract)(nums), -4);
        assert.strictEqual(C.fold(C.concat)('foo'), 'foo');
    });
});
