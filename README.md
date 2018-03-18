# Chips &nbsp; [![Build Status](https://travis-ci.org/chrisisler/chips.svg?branch=master)](https://travis-ci.org/chrisisler/chips)
A JavaScript library for functional programming with composable, higher-order functions.

* Compose all the things with `C.pipe`.
* Curry your own functions with `C.curry`.
* Work with _purity_ - each function operates on a _copy_ of the input.
* Each Chips function is [curried](https://www.sitepoint.com/currying-in-functional-javascript/).

## [API Documentation](https://github.com/chrisisler/chips/blob/master/API.md)


## Install

```bash
npm install chips
```

```javascript
// Import everything:
const C = require('chips')

// Or import only what's needed:
const { map, filter, pipe } = require('chips')
```
