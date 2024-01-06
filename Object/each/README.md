# ALIGN

2. [Object](../README.md)
    3. [each](./README.md)

## DESCRIPTION

Iterates over the object


## USE 

```javascript
import each from "flp/Object/each/index.js";
```

## EXAMPLES

```javascript
each(console.log)({ a: 1, b: 2, c: 3 }) // { a: 1, b: 2, c: 3 }
// -> 1 "a" { a: 1, b: 2, c: 3 }
// -> 2 "b" { a: 1, b: 2, c: 3 }
// -> 3 "c" { a: 1, b: 2, c: 3 }
```

### SEE ALSO

- [Array](../../Array/README.md).[forEach](../../Array/forEach/README.md)
