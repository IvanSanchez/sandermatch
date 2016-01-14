
# Sandermatch

Filesystem functions that return filenames matching a minimatch pattern


## What

`sandermatch` is a small javascript library that combines the Promise-based power of [`sander`](https://github.com/Rich-Harris/sander) with the regexp-matching power of [`minimatch`](https://github.com/isaacs/minimatch).

It exports the following functions:

``


## How 

"Give me all the filenames of all PNG images in /tmp, recursively"

```js
var sandermatch = require('sandermatch');

sandermatch.lsrMatch('/tmp', '**.png').then(function(filenames){ console.log(filenames) });
```

The following functions are exported:

``


## Compatibility

`sandermatch` is coded in ES2016, and transpiles to ES5 **but** it assumes that the `Set` datatype exists. Since this is [implemented in node 0.12 onwards](http://kangax.github.io/compat-table/es6/#test-Set), it shouldn't be a problem.

Run `npm install` to transpile to ES5. ES5/ES2015 dependencies should be handled transparently via the `main`/`jsnext:main` properties of `package.json`.

In ES2015 packages:

```js
import { lsrMatch } from 'sandermatch';
lsrMatch(path, pattern).then(doStuff);
```

