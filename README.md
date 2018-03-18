# Chips &nbsp; [![Build Status](https://travis-ci.org/chrisisler/chips.svg?branch=master)](https://travis-ci.org/chrisisler/chips)
A JavaScript library facilitating declarative logic by providing composable, higher-order functions.

* All the usual goodies:  `C.map`, `C.filter`, `C.reduce`, and more: `C.zipObjBy`, `C.mergeAllBy`.
* Compose all the things with `C.pipe`.
* Curry your own functions with `C.curry`.
* Work with _purity_ - each Chips function returns a _copy_ of the input.
* Each Chips function is [curried](https://www.sitepoint.com/currying-in-functional-javascript/).

[API Documentation](https://github.com/chrisisler/chips/blob/master/API.md)

```javascript
const flattenOnce = (list) => C.accum(C.concat, list);
getSalariesOver20([{name: 'joe', salary: '15h'}, {name: 'kat', salary: '30h'}]); //=> 30

const map = (f) => C.reduce((xs, x) => )
const pipe = (fn0, ...fns) => (...args) => C.reduce((out, fn) => fn(out), fn0(args), fns);
```

## Install
```bash
npm install chips
```
Then in some file.js:
```javascript
const C = require('chips');
```

## Roadmap
- Better docs and write tests for `C.via`.
- Better docs and write tests for `C.flattenOnce`.
- `$ s/list/array/g`
