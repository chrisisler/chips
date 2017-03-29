var assert = require('assert');
var C = require('../index');

describe('zipObjBy', function() {
    var dbl = function(val) { return val * 2; };
    var keys = [ 'a', 'b', 'c' ];
    var vals = [ 1, 2, 3 ];

    var expected = { a: 2, b: 4, c: 6 };

    it('returns a new obj by zipping a list of keys with a function applied to a list of values', function() {
        assert.deepEqual(
            C.zipObjBy(dbl, keys, vals),
            expected
        );
    });

    it('returns an empty object if either of the lists are empty', function() {
        assert.deepEqual(C.zipObjBy(dbl, [], vals), {});
        assert.deepEqual(C.zipObjBy(dbl, keys, []), {});
    });

    it('provides an identity function of a falsy function is supplied', function() {
        var obj = { a: 1, b: 2, c: 3 };

        assert.deepEqual(C.zipObjBy(null, keys, vals), obj);
        assert.deepEqual(C.zipObjBy(undefined, keys, vals), obj);
        assert.deepEqual(C.zipObjBy(void 0, keys, vals), obj);
        assert.deepEqual(C.zipObjBy(false, keys, vals), obj);
    });

    it('truncates to the length of the list of `keys`', function() {
        assert.deepEqual(C.zipObjBy(dbl, keys, [ 1, 2, 3, 4, 5 ]), expected);
    });

    it('is curried', function() {
        assert.deepEqual(C.zipObjBy(dbl)(keys, vals), expected);
        assert.deepEqual(C.zipObjBy(dbl, keys)(vals), expected);
        assert.deepEqual(C.zipObjBy(dbl)(keys)(vals), expected);

        assert.strictEqual(typeof C.zipObjBy(dbl, keys), 'function');
        assert.strictEqual(typeof C.zipObjBy(dbl)(keys), 'function');
    });
});
