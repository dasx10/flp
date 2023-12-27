# COUNT OF

2. [Array](../README.md)
    3. [countOf](./README.md)


## USE

```javascript
import countOf from "flp/Array/countOf/index.js";
```

## Examples

```javascript
var numbers = [1, 2, 3, 4];
countOf(0)(numbers); // 0
countOf(1)(numbers); // 1
countOf(2)(numbers); // 1
countOf(3)(numbers); // 1
countOf(4)(numbers); // 1
countOf(5)(numbers); // 0

var values = ["a", "a", "b", "b", "b", "c", "c", "c", "c"];
countOf("a")(values); // 2
countOf("b")(values); // 3
countOf("c")(values); // 4
countOf("d")(values); // 0
```

### SEE ALSO

- [indexOf](../indexOf/README.md)
- [lastIndexOf](../lastIndexOf/README.md)
- [count](../count/README.md)
- [length](../length/README.md)
- [countOfFrom](../countOfFrom/README.md)
- [filter](../filter/README.md)
