# API

#### C.accum(fn, lengthable)
A shortcut for `reduce` where the initial accumulator value is taken from
`lengthable[0]`.
```javascript
C.accum((acc, x) => acc + x, [ 1, 2, 3 ]); //=> 6
```

#### C.allPass(predicates, value)
Return true if the given `value` satisifies each function in `predicates`.
```javascript
C.allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
```

#### C.alterProp(key, fn, obj)
Returns a new object by applying the function `fn` over the specified `key`.
```javascript
C.alterProp('name', toUpper, {name: 'rufus'}); //=> {name: 'RUFUS'}
C.alterProp('id', x => x * 2, { id: 201 }); //=> { id: 402 }
```

#### C.concat(a, b)
Merges the two given items (in the order they're supplied).
Items provided must be of the same type (Array or String).
```javascript
C.concat([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
C.concat('dogs', ' and cats'); //=> 'dogs and cats'
```

#### C.curry(fn)
Returns a new function that, when called with a subset of the original
functions arguments, returns a new function.
See `C.pipe` for an example of how currying works.
```javascript
C.curry((a, b, c, d) => a + b + c + d)(1)(2)(3)(5); //=> 17
C.curry((a, b, c) => a + b + c)(1)(2)(3); //=> 6
C.curry((a, b) => a + b)(1)(2); //=> 3
```

#### C.disJoin(predicates, values)
Returns a list of lists where the sub-list at index `i` contains all values
from the given list `values` which satisfy the equally-indexed predicate
function at that same index `i`.
```javascript
C.disJoin([getEvens, getOdds], [1, 2, 3, 4]); //=> [[2, 4], [1, 3]]
```

#### C.filter(predicate, item)
Returns a copy of the given value, `item`, which now contains only the
sub-values which returned true when passed to `predicate`.
Applies the given function to each element of an Array, each value of an
Object, and each character of a String.
```javascript
C.filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
C.filter(x => x >= 3, [ 1, 2, 3 ]); //=> [ 3 ]
C.filter(x => x === x.toUpperCase(), 'FooBar'); //=> 'FB'
```

#### C.flatMap(fn, values)
Returns the recursively flattened result of applying a function to a list.
```javascript
C.flatMap(x => [ x, ln(x) ], [ 1, e ]); //=> [ 1, 0, e, 1 ]
C.flatMap(x => [ x, x * x ], [ 3, 4 ]); //=> [ 3, 9, 4, 16 ]
```

#### C.flatten(values)
Returns a copy of `values` flattened to one-dimension (plucked out sub-lists).
```javascript
C.flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
```

#### C.isIn(values, value)
Returns true if the `value` is the list `values`, false otherwise.
```javascript
C.isIn([ 1, 2, 3 ], 5); //=> false
C.isIn([ 1, 2, 3 ], 3); //=> true
```

#### C.majority(predicate, values)
Returns true if the `predicate` function returns true more than half of the
time when applied to each element in `values`.
```javascript
C.majority(s => s.endsWith('e'), ['same', 'name', 'no']); //=> true
C.majority(s => s.endsWith('e'), ['foo', 'bar', 'me']); //=> false
```

#### C.majorityPass(predicates, value)
Returns true if more than half of the `predicates` return true when applied
to `value`.
```javascript
C.majorityPass([ isEven, isOdd, isNumber ], 42); //=> true
C.majorityPass([ isEven, isOdd, isObject ], 42); //=> false
```

#### C.map(fn, item)
Returns the result of applying `fn` over all values in `item`.
Returns a new function that, when called, applies its arguments to `fn` and
`item`, in order.
If `item` is a function, a new function is returned which composes both
functions.
```javascript
C.map((v, k) => v + k, { a: 1 }); //=> { a: 'a1' }
C.map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
C.map((x, index) => index, ['baz']); //=> [ 0 ]
C.map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
C.map(x => x * 2, y => y + 1)(3); //=> 7
C.map(x => x * 2, 100); //=> 200
```

#### C.mergeAllBy(resolver, objs)
The same as Object.assign except when multiple objects with the same key and
non-same values for that key are encountered, a list of those values is
applied to the supplied `resolver` function to produce a single value.
```javascript
var getTotal = C.accum((a,b) => a + b);
C.mergeAllBy(getTotal, [ { x: 1, z: 5 }, { y: 2, z: 6 } ]);
//=> {x: 1, y: 2, z: 11}
```

#### C.nPass(N, predicate, filterable)
Applies the predicate function to every element the `filterable`.
Returns true if the predicate returns true N times.
```javascript
C.nPass(3, (val, i) => val % 2 === 1, [ 1, 2, 3, 4, 5 ]); //=> true
```

#### C.pipe()
Takes N functions as arguments and _returns a function_ that behaves
equivalent to all provided functions in the order they are given. In other
words, `pipe` is a variadic (N-ary) function which composes the supplied
functions in order. The output of the first function is 'piped' as the input
to the next function.
```javascript
var getAgeOver30 = (a) => a.age > 30;
var getNames = (a) => a.name;
var namesOver30 = C.pipe(C.filter(getAgeOver30), C.map(getNames));
var adults = [ {name: 'karen', age: 32}, {name: 'mike', age: 26} ];
namesOver30(adults); //=> 'karen'
```

#### C.prop(key, obj)
Returns `obj[key]`.
```javascript
C.prop('name', { name: 'karen', age: 32 }); //=> 'karen'
```

#### C.reduce(reducer, accumulator, lengthable)
Consecutively applies a `reducer` function against an `accumulator` value
(an initial value to build upn) and each value in the data structure,
`lengthable` (anything with a `.length` property), to produce a result.
```javascript
C.reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
C.reduce((acc, x) => acc - x, 0, C.values({ a: 1, b: 2 })); //=> -3
```

#### C.reduceWhile(predicate, reducer, accumulator, lengthable)
Applies an iterator function against an accumulated value and each value
of the data structure `accumulator` (from left-to-right) while `predicate`
returns true to produce a final value.
```javascript
var isGreaterThan10 = (sum) => sum > 10;
var add = (total, val) => total + val;
C.reduceWhile(isGreaterThan10, add, 0, [ 2, 4, 6, 8 ]); //=> 12
```

#### C.swapIndex(index1, index2, values)
Return the given list with the elements at the two indexes swapped.
```javascript
C.swapIndex(0, 2, [ 'a', 'b', 'c' ]); //=> [ 'c', 'b', 'a' ]
```

#### C.tail(values)
Returns the given list retaining every element except the zeroth.
```javascript
C.tail([ 1, 2, 3 ]); //=> [ 2, 3 ]
```

#### C.uniq(values)
Remove the duplicate values from the given list.
```javascript
C.uniq([ 1, 2, 3, 3, 3, 4 ]); //=> [ 1, 2, 3, 4 ]
```

#### C.values(obj)
Returns a list of the own properties of the given object.
```javascript
C.values({ name: 'bob', job: 'chef' }); //=> [ 'bob', 'chef' ]
```

#### C.zipBy(fn, xValues, yValues)
Returns a new list by applying the given function to each equally-indexed
element in the given lists, truncating to the list of shorter length.
If `fn` is falsy, each equal-index "pair" is inserted like:
`[ xValues[i], yValues[i] ]`, then the outputted list is flattened by
one-dimension before it is returned (concatenating the lists together like a
literal zipper).
```javascript
C.zipBy((x, y) => x + y, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [3, 7, 11]
C.zipBy(null, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 1, 2, 3, 4, 5 ,6 ]
```

#### C.zipObjBy(fn, keys, values)
Returns a new object by zipping a list of `keys` with a function, `fn`,
which is applied to a list of `values` and `keys`.
Note: The length of returned list is equal to the length of the `keys` list.
```javascript
C.zipObjBy(v => v / 2, ['k1', 'k2'], [4, 6]); //=> { k1: 2, k2: 3 }
C.zipObjBy((v, k) => v + k, ['id'], [682]); //=> { id: 'id682' }
```

