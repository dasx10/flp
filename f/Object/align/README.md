# ALIGN

2. [Object](../README.md)
    3. [align](./README.md)

## DESCRIPTION

Return new object with keys aligned.


## USE 

```javascript
import align from "flp/Object/align/index.js";
```

## EXAMPLES

```javascript
align({ a: 1, b: 2, c: 3 }) // { a: 1, b: 2, c: 3 }
align({ a: 1, c: 3, b: 2 }) // { a: 1, b: 2, c: 3 }
align({ b: 2, c: 3, a: 1 }) // { a: 1, b: 2, c: 3 }
align({ b: 2, a: 1, c: 3 }) // { a: 1, b: 2, c: 3 }
align({ c: 3, a: 1, b: 2 }) // { a: 1, b: 2, c: 3 }
align({ c: 3, b: 2, a: 1 }) // { a: 1, b: 2, c: 3 }
```

### SEE ALSO

- [Array](../../Array/README.md).[sort](../../Array/sort/README.md)
