# CONCAT RIGHT

2. [Array](../README.md)
    3. [concatRight](./README.md)


## USE

```javascript
import concatRight from "flp/Array/concatRight/index.js";
```

## Examples

```javascript
concatRight([5])(numbers); // [5, 1, 2, 3, 4];
concatRight([6, 7])(numbers); // [6, 7, 1, 2, 3, 4];
concatRight([8, 9, 10])(numbers); // [8, 9, 10, 1, 2, 3, 4];
concatRight(numbers)(numbers); // [1, 2, 3, 4, 1, 2, 3, 4];
```

### SEE ALSO

- [concat](../concat/README.md)
- [append](../append/README.md)
- [prepend](../prepend/README.md)
