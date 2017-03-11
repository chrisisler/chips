var assert = require('assert');
var C = require('../index');

describe('zipObjWith', function() {
    var dbl = function(val) { return val * 2; };
    var keys = [ 'a', 'b', 'c' ];
    var vals = [ 1, 2, 3 ];

    var expected = { a: 2, b: 4, c: 6 };

    it('returns a new obj by zipping a list of keys with a function applied to a list of values', function() {
        assert.deepEqual(
            C.zipObjWith(dbl, keys, vals),
            expected
        );
    });

    it('returns an empty object if either of the lists are empty', function() {
        assert.deepEqual(C.zipObjWith(dbl, [], vals), {});
        assert.deepEqual(C.zipObjWith(dbl, keys, []), {});
    });

    it('provides an identity function of a falsy function is supplied', function() {
        var obj = { a: 1, b: 2, c: 3 };

        assert.deepEqual(C.zipObjWith(null, keys, vals), obj);
        assert.deepEqual(C.zipObjWith(undefined, keys, vals), obj);
        assert.deepEqual(C.zipObjWith(void 0, keys, vals), obj);
        assert.deepEqual(C.zipObjWith(false, keys, vals), obj);
    });

    it('truncates to the length of the list of `keys`', function() {
        assert.deepEqual(C.zipObjWith(dbl, keys, [ 1, 2, 3, 4, 5 ]), expected);
    });

    it('is curried', function() {
        assert.deepEqual(C.zipObjWith(dbl)(keys, vals), expected);
        assert.deepEqual(C.zipObjWith(dbl, keys)(vals), expected);
        assert.deepEqual(C.zipObjWith(dbl)(keys)(vals), expected);

        assert.strictEqual(typeof C.zipObjWith(dbl, keys), 'function');
        assert.strictEqual(typeof C.zipObjWith(dbl)(keys), 'function');
    });
});
