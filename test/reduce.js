var assert = require('assert');
var C = require('../index');

describe('reduce', function() {
    var add = function(a, b) { return a + b; };
    var subtract = function(a, b) { return a - b;  };

    var nums = [ 1, 2, 3 ];

    it('returns the result of applying a function to each accumulated value', function() {
        assert.strictEqual(C.reduce(add, 0, nums), 6);
        assert.strictEqual(C.reduce(subtract, 0, nums), -6);

        assert.strictEqual(C.reduce(add, '', 'foo'), 'foo');
    });

    it('returns the initial accumulator if the item to fold/reduce is empty', function() {
        assert.strictEqual(C.reduce(add, 0, []), 0);
        assert.deepEqual(C.reduce(C.concat, [], []), []);

        assert.strictEqual(C.reduce(add, '', ''), '');
        assert.strictEqual(C.reduce(C.concat, '', ''), '');
    });

    it('is curried', function() {
        var together = C.reduce(add);

        var sum = together(0);
        assert.strictEqual(sum([ 10, 20, 30 ]), 60);

        var strConcat = together('');
        assert.strictEqual(strConcat('monkey'), 'monkey');
        assert.strictEqual(strConcat(['m', 'o', 'n', 'k', 'e', 'y']), 'monkey');
    });
});
