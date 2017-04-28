var assert = require('assert');
var C = require('../index');

describe('filter', function() {
    var obj = { a: 1, b: 2, c: 3 };
    var str = 'foobar';
    var list = [ 1, 2, 3 ];
    var greaterThanTwo = function(x) { return x > 2; };
    var equalsF = function(x) { return x === 'f'; };

    describe('works on lists', function() {
        it('returns a new list containing elements which satisfy the predicate', function() {
            assert.deepEqual(C.filter(greaterThanTwo, list), [ 3 ]);
        });
        it('returns an empty list if no element satisfies the predicate', function() {
            assert.deepEqual(C.filter(equalsF, list), []);
        });
        it('applies the index as a second parameter to the `predicate` when `filterable` is a list', function() {
            var evenIndexed = function(val, index) { return index % 2 === 0; };
            assert.deepEqual(C.filter(evenIndexed, [ 'a', 'b', 'c', 'd', 'e' ]), [ 'a', 'c', 'e' ]);
        });
    });

    describe('works on objects', function() {
        it('returns a new object containing props which satisfy the predicate', function() {
            assert.deepEqual(C.filter(greaterThanTwo, obj), { c: 3 });
        });
        it('returns an empty object if no prop satisfies the predicate', function() {
            assert.deepEqual(C.filter(equalsF, obj), {});
        });
        it('applies the key as a second parameter to the `predicate` when `filterable` is an object', function() {
            var keyLengthLessThan3 = function(val, key, index) { return key.length < 3; };
            assert.deepEqual(C.filter(keyLengthLessThan3, { id: 'hot', name: 'sauce' }), { id: 'hot' });
        });
    });

    describe('works on strings', function() {
        it('returns a new string containing characters which satisfy the predicate', function() {
            assert.deepEqual(C.filter(equalsF, str), 'f');
        });
        it('returns an empty string if no character satisfies the predicate', function() {
            assert.deepEqual(C.filter(greaterThanTwo, str), '');
        });
        it('applies the index as a second parameter to the `predicate` when `filterable` is a list', function() {
            var evenIndexed = function(val, index) { return index % 2 === 0; };
            assert.deepEqual(C.filter(evenIndexed, 'abcde'), 'ace');
        });
    });

    it('throws when "filterable" argument is not a list, object, or string', function() {
        assert.throws(function() { C.filter(greaterThanTwo, 42); }, TypeError);
    });

    it('is curried', function() {
        var filterGreaterThanTwo = C.filter(greaterThanTwo);
        var filterEqualsF = C.filter(equalsF);

        assert.deepEqual(filterGreaterThanTwo(list), [ 3 ]);
        assert.deepEqual(filterGreaterThanTwo(obj), { c: 3 });
        assert.deepEqual(filterEqualsF(str), 'f');

        assert.strictEqual(typeof filterEqualsF, 'function');
    });
});
