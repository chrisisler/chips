var assert = require('assert');
var C = require('../index');

describe('tail', function() {
    it('returns a new list containing all but the zeroth element', function() {
        assert.deepEqual(C.tail([ 1, 2, 3 ]), [ 2, 3 ]);
    });

    it('returns an empty list/string if an empty list/string was given', function() {
        assert.deepEqual([], []);
    });
});
