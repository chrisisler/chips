var assert = require('assert');
var C = require('../index');

describe('concat', function() {
    var expectedArray = [ 1, 2 ];
    var expectedStr = 'dogs and cats';

    it('returns the result of merging two arrays', function() {
        assert.deepEqual(
            C.concat([ 1 ], [ 2 ]),
            expectedArray
        );
    });

    it('returns the result of merging two strings', function() {
        assert.strictEqual(
            C.concat('dogs', ' and cats'),
            expectedStr
        );
    });

    it('does not merge empty strings', function() {
        assert.strictEqual(
            C.concat('', expectedStr),
            expectedStr
        );
    });

    it('does not merge empty arrays', function() {
        assert.deepEqual(
            C.concat([ ], expectedArray),
            expectedArray
        );
    });

    it('throws if argument types differ', function() {
        // String
        assert.throws(
            function() { return C.concat('dogs', {}); },
            TypeError
        );
        // Array
        assert.throws(
            function() { return C.concat([ 1 ], {}); },
            TypeError
        );
    });

    it('is curried', function() {
        var concatDogs = C.concat('dogs');
        var concatOne = C.concat([ 1 ]);

        assert.strictEqual(
            concatDogs(' and cats'),
            expectedStr
        );
        assert.deepEqual(
            concatOne([ 2 ]),
            expectedArray
        );

        assert.strictEqual(typeof concatOne, 'function');
    });
});
