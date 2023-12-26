# COUNT

2. [Array](../README.md)
    3. [countBy](./README.md)


## USE

```javascript
import countBy from "flp/Array/countBy/index.js";
```

## Examples

```javascript
var numbers = [-1, 0, 1, 2];
countBy(Math.abs)(numbers); // { "1": 2, "0": 1, "2": 1 };
countBy(String)(["0", 0, "1", 1]); // { "0": 2, "1": 2 };
countBy(Boolean)([false, 0, "", null, true]); // { "false": 4, "true": 1 };
```

### SEE ALSO

- [count](../count/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
