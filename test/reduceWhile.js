var assert = require('assert');
var C = require('../index');

describe('reduceWhile', function() {
    var lessThan3 = function(x) { return x < 3; };
    var lessThan4 = function(x) { return x < 4; };
    var add = function(x, y) { return x + y; };
    var nums = [ 1, 2, 3, 4 ];

    it('applies `reducer` to `lengthable` while `predicate` is true to return a result', function() {
        assert.deepEqual(C.reduceWhile(lessThan3, add, 0, nums), 3 );
        assert.deepEqual(C.reduceWhile(lessThan4, add, 0, nums), 6);
    });

    it('returns the supplied `accumulator` if the given `lengthable` empty', function() {
        assert.strictEqual(C.reduceWhile(lessThan3, add, 0, []), 0);
        assert.deepEqual(C.reduceWhile(lessThan3, C.concat, [], []), []);
        assert.strictEqual(C.reduceWhile(lessThan3, add, '', ''), '');
        assert.strictEqual(C.reduceWhile(lessThan3, C.concat, '', ''), '');
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.reduceWhile, 'function');
        assert.strictEqual(typeof C.reduceWhile(lessThan3), 'function');
        assert.strictEqual(typeof C.reduceWhile(lessThan3, add), 'function');
        assert.strictEqual(typeof C.reduceWhile(lessThan3, add, 0), 'function');

        assert.deepEqual(C.reduceWhile(lessThan3)(add)(0)(nums), 3 );
    });
});
