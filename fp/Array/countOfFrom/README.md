# COUNT OF

2. [Array](../README.md)
    3. [countOfFrom](./README.md)


## USE

```javascript
import countOfFrom from "flp/Array/countOfFrom/index.js";
```

## EXAMPLES

```javascript
var numbers = [1, 2, 2, 3, 3, 3];
countOfFrom(0)(0)(numbers); // 0
countOfFrom(1)(0)(numbers); // 1
countOfFrom(2)(0)(numbers); // 2
countOfFrom(0)(1)(numbers); // 1
countOfFrom(1)(1)(numbers); // 2
countOfFrom(2)(1)(numbers); // 3
countOfFrom(0)(2)(numbers); // 2
countOfFrom(1)(2)(numbers); // 3
countOfFrom(2)(2)(numbers); // 4
countOfFrom(0)(3)(numbers); // 3
countOfFrom(1)(3)(numbers); // 4
countOfFrom(2)(3)(numbers); // 5
countOfFrom(0)(4)(numbers); // 0
countOfFrom(1)(4)(numbers); // 1
```

### SEE ALSO

- [indexOf](../indexOf/README.md)
- [count](../count/README.md)
- [length](../length/README.md)
- [countOfFrom](../countOfFrom/README.md)
- [filter](../filter/README.md)
