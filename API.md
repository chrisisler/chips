# API

#### C.accum(fn, lengthable)
This function is a shortcut for `reduce` where an initial accumulator is taken from `lengthable[0]`.
```javascript
C.accum((acc, x) => acc + x, [ 1, 2, 3 ]); //=> 6
```

#### C.allPass(predicates, val)
Return true if the given value satisifies each function in `predicates`.
```javascript
C.allPass([ x => x % 2 === 1, x => x === 3 ], 3); //=> true
```

#### C.alterProp(prop, fn, obj)
Returns a new object by applying the given function to the specified property.
```javascript
C.alterProp('name', toUpper, { name: 'rufus' }); //=> { name: 'RUFUS' }
C.alterProp('id', x => x * 2, { id: 201 }); //=> { id: 402 }
```

#### C.concat(a, b)
Merges the two given items (in the order they're supplied).
```javascript
C.concat([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
C.concat('dogs', ' and cats'); //=> 'dogs and cats'
```

#### C.curry(fn)
Returns a new function that, when called with a subset of the original
functions arguments, returns a new function.
```javascript
C.curry((a, b, c, d, e) => a + b + c + d + e)(1)(2)(3)(5)(6); //=> 17
C.curry((a, b, c) => a + b + c)(1)(2)(3); //=> 6
C.curry((a, b) => a + b)(1)(2); //=> 3
```

#### C.filter(predicate, filterable)
Returns a new `filterable` containing values which satisfy the predicate.
```javascript
C.filter(x => x === 1, { a: 1, b: 2 }); //=> { a: 1 }
C.filter(x => x >= 3, [ 1, 2, 3 ]); //=> [ 3 ]
C.filter(x => x === x.toUpperCase(), 'FooBar'); //=> 'FB'
```

#### C.flatMap(fn, vals)
Returns the recursively flattened result of applying a function to a list.
```javascript
C.flatMap(x => [ x, ln(x) ], [ 1, e ]); //=> [ 1, 0, e, 1 ]
C.flatMap(x => [ x, x * x ], [ 3, 4 ]); //=> [ 3, 9, 4, 16 ]
```

#### C.flatten(vals)
Returns a copy of the given list flattened to one-dimension (plucked out sub-lists).
```javascript
C.flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
```

#### C.isIn(vals, val)
Returns true if the `val` is the list `vals`, false otherwise.
```javascript
C.isIn([ 1, 2, 3 ], 5); //=> false
C.isIn([ 1, 2, 3 ], 3); //=> true
```

#### C.majority(predicate, vals)
Returns true if a majority of the list elements satisfy the predicate.
```javascript
C.majority(s => s.endsWith('e'), [ 'same', 'name', 'no' ]); //=> true
C.majority(s => s.endsWith('e'), [ 'foo', 'bar', 'me' ]); //=> false
```

#### C.majorityPass(predicates, value)
Returns true if more than half of the `predicates` return true when applied to `value`.
```javascript
C.majorityPass([ isEven, isOdd, isNumber ], 42); //=> true
C.majorityPass([ isEven, isOdd, isObject ], 42); //=> false
```

#### C.map(fn, mappable)
Returns the result of applying a function to map some data structure.
```javascript
C.map((v, k) => v + k, { a: 1 }); //=> { a: 'a1' }
C.map(x => x * 2, [ 1, 2 ]); //=> [ 2, 4 ]
C.map((x, index) => index, ['baz']); //=> [ 0 ]
C.map(x => x.toUpperCase(), 'foo'); //=> 'FOO'
C.map(x => x * 2, y => y + 1)(3); //=> 7
C.map(x => x * 2, 100); //=> 200
```

#### C.mergeAllBy(resolver, objs)
The same as Object.assign except when a objects with the same key and with
non-same values for that key appear, a list of those values is applied to
the supplied `resolver` to produce a value for that key. Order not guaranteed.
```javascript
C.mergeAllBy(C.accum((a, b) => a + b), [{x: 1, z:5}, {y: 2, z: 6}]); //=> {x: 1, y: 2, z: 11}
```

#### C.nPass(N, predicate, filterable)
Applies the predicate function to every element the `filterable`.
Returns true if the predicate returns true N times.
```javascript
C.nPass(3, (val, index) => val % 2 === 1, [ 1, 2, 3, 4, 5 ]); //=> true
```

#### C.pipe()
A variadic function that composes the supplied functions in the order given.
```javascript
var adultsOver30 = C.pipe(C.filter(a => a.age > 30), C.map(a => a.name));
adultsOver30([{name: 'karen', age: 32}, {name: 'mike', age: 26}]); //=> 'karen'
```

#### C.prop(key, obj)
Returns `obj[key]`.
```javascript
C.prop('age', { name: 'karen', age: 32 }); //=> 32
C.map(C.prop('id'), [{foo: 'bar', id: 327}, {id: 279}]); //=> [327, 279]
```

#### C.reduce(reducer, accumulator, lengthable)
Applies an iterator function, `reducer`, against an accumulator and each value
in the data structure `accumulator` (from left-to-right) to produce a single value.
```javascript
C.reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
C.reduce((acc, x) => acc - x, 0, C.values({ a: 1, b: 2 })); //=> -3
```

#### C.reduceWhile(predicate, reducer, accumulator, lengthable)
Applies an iterator function against an accumulated value and each value
of the data structure `accumulator` (from left-to-right) while `predicate` returns true
to produce a final value.
```javascript
C.reduceWhile(sum => sum > 10, (sum, y) => sum + y, 0, [ 2, 4, 6, 8 ]); //=> 12
```

#### C.swapIndex(index1, index2, vals)
Return the given list with the elements at the two indexes swapped.
```javascript
C.swapIndex(0, 2, [ 'a', 'b', 'c' ]); //=> [ 'c', 'b', 'a' ]
```

#### C.tail(vals)
Returns the given data containing every element or character except the zeroth.
```javascript
C.tail([ 1, 2, 3 ]); //=> [ 2, 3 ]
```

#### C.uniq(vals)
Remove the duplicate values from the given list.
```javascript
C.uniq([ 1, 2, 3, 3, 3, 4 ]); //=> [ 1, 2, 3, 4 ]
```

#### C.values(obj)
Returns a list of the own properties of the given object.
```javascript
C.values({name: 'bob', age: 44, job: 'chef'}); //=> ['bob', 44, 'chef']
```

#### C.zipBy(fn, xs, ys)
Return a new list by applying the given function to each equally-positioned
element in the given lists. Truncating to the list of shorter length.
If `fn` is falsy, each equal-index "pair" is inserted like so: [xs[i], ys[i]],
then the outputted list is flattened by one dimension before it is returned.
```javascript
C.zipBy((x, y) => x + y, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
C.zipBy(null, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
```

#### C.zipObjBy(fn, keys, vals)
Returns a new object by zipping a list of `keys` with a function, `fn`,
applied to a list of `values`.
Note: The length of returned list is equal to the length of the `keys` list.
```javascript
C.zipObjBy(x => x / 2, [ 'k1', 'k2' ], [ 4, 6 ]); //=> { k1: 2, k2: 3 }
C.zipObjBy((val, key) => `${key} is ${val}`, ['id'], [682]); //=> { id: 'id is 682' }
```

