# COUNT

2. [Array](../README.md)
    3. [countRight](./README.md)


## USE

```javascript
import countRight from "flp/Array/countRight/index.js";
```

## EXAMPLES

```javascript
var numbers = [1, 2, 3, 4];
var isEven  = (value) => value % 2 === 0;
countRight(isEven)(numbers); // 2;
countRight(value => value > -1)(numbers); // 4;
countRight(value => value > 0)(numbers); // 4;
countRight(value => value > 1)(numbers); // 3;
countRight(value => value > 2)(numbers); // 2;
countRight(value => value > 3)(numbers); // 1;
countRight(value => value > 4)(numbers); // 0;
countRight(value => value > 5)(numbers); // 0;
```

### SEE ALSO

- [count](../count/README.md)
- [countBy](../countBy/README.md)
- [countOf](../countOf/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
