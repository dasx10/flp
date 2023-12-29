# CONCAT

2. [Array](../README.md)
    3. [concat](./README.md)


## USE

```javascript
import concat from "flp/Array/concat/index.js";
```

## EXAMPLES

```javascript
var numbers = [1, 2, 3, 4];
concat([5])(numbers); // [1, 2, 3, 4, 5];
concat([6, 7])(numbers); // [1, 2, 3, 4, 6, 7];
concat([8, 9, 10])(numbers); // [1, 2, 3, 4, 8, 9, 10];
concat(numbers)(numbers); // [1, 2, 3, 4, 1, 2, 3, 4];
```

### SEE ALSO

- [concatRight](../concatRight/README.md)
- [append](../append/README.md)
- [prepend](../prepend/README.md)
