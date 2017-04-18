var assert = require('assert');
var C = require('../index');

describe('prop', function() {
    var obj = { name: 'sierra', id: 3722 };

    it('returns the specified property of a given object', function() {
        assert.deepEqual(C.prop('name', obj), 'sierra');
        assert.deepEqual(C.prop('id', obj), 3722);
    });

    it('is curried', function() {
        var getName = C.prop('name');
        assert.deepEqual(getName(obj), 'sierra');
        assert.strictEqual(typeof getName, 'function');
    });
});
