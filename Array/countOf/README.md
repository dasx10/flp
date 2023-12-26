# COUNT

2. [Array](../README.md)
    3. [countOf](./README.md)


## USE

```javascript
import countOf from "flp/Array/countOf/index.js";
```

## Examples

```javascript
var numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
countOf(0)(numbers); // 0;
countOf(1)(numbers); // 2;
countOf(2)(numbers); // 3;
countOf(3)(numbers); // 4;
countOf(4)(numbers); // 5;
countOf(5)(numbers); // 0;
countOf(0)([]); // 0;
countOf(1)([]); // 0;
```

### SEE ALSO

- [count](../count/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [indexOf](../indexOf/README.md)
