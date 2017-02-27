var assert = require('assert');
var C = require('../index');

describe('allPass', function() {
    var greaterThan5 = function(x) { return x > 5; }
    var lessThan10 = function(x) { return x < 10; }
    var equals8 = function(x) { return x === 8; }
    var expected = 8;

    it('returns true if value satisifies each predicate', function() {
        assert.strictEqual(
            C.allPass([greaterThan5, lessThan10, equals8], expected),
            true
        );
        assert.strictEqual(
            C.allPass([greaterThan5, lessThan10], 9),
            true
        );
        assert.strictEqual(
            C.allPass([greaterThan5], 6),
            true
        );
    });

    it('returns false if value dissatisfies any predicate', function() {
        assert.strictEqual(
            C.allPass([greaterThan5, lessThan10, equals8], 25),
            false
        );
        assert.strictEqual(
            C.allPass([greaterThan5, lessThan10], 3),
            false
        );
        assert.strictEqual(
            C.allPass([greaterThan5], 0),
            false
        );
    });

    it('returns true for empty predicate list', function() {
        assert.strictEqual(
            C.allPass([], 'foo'),
            true
        );
    });

    it('is curried', function() {
        var everyPredicate = C.allPass([greaterThan5, lessThan10, equals8]);

        assert.strictEqual(
            everyPredicate(expected),
            true
        );
        assert.strictEqual(
            everyPredicate(Infinity),
            false
        );
    });
});
