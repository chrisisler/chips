var assert = require('assert');
var C = require('../index');

describe('values', function() {
    var obj = { name: 'chris', age: Infinity };
    var expected = [ 'chris', Infinity ];

    it('Returns a list of the own properties of the given object', function() {
        assert.deepEqual(C.values(obj), expected);
    });

    it('Returns an empty array when given an empty object', function() {
        assert.deepEqual(C.values({}), []);
    });
});
