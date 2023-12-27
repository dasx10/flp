# COUNT

2. [Array](../README.md)
    3. [count](./README.md)


## USE

```javascript
import count from "flp/Array/count/index.js";
```

## Examples

```javascript
var numbers = [1, 2, 3, 4];
var isEven  = (value) => value % 2 === 0;
count(isEven)(numbers); // 2;
count(value => value > -1)(numbers); // 4;
count(value => value > 0)(numbers); // 4;
count(value => value > 1)(numbers); // 3;
count(value => value > 2)(numbers); // 2;
count(value => value > 3)(numbers); // 1;
count(value => value > 4)(numbers); // 0;
count(value => value > 5)(numbers); // 0;
```

### SEE ALSO

- [countBy](../countBy/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [sum](../sum/README.md)
