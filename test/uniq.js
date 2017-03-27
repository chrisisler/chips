var assert = require('assert');
var C = require('../index');

describe('uniq', function() {
    it('returns a list containing all non-same values from the given list', function() {
        assert.deepEqual(C.uniq([]), []);
        assert.deepEqual(C.uniq([ 0, 0, 5 ]), [ 0, 5 ]);
        assert.deepEqual(C.uniq([ 0, 5 ]), [ 0, 5 ]);
    });
});
