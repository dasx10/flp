# COUNT OF

2. [Array](../README.md)
    3. [countFromRight](./README.md)


## USE

```javascript
import countFromRight from "flp/Array/countFromRight/index.js";
```

## Examples

```javascript
var numbers = [1, 2, 3];
var identity = (value) => value;
countFromRight(0)(identity)(numbers); // 6;
countFromRight(1)(identity)(numbers); // 7;
countFromRight(10)(identity)(numbers); // 16;
countFromRight(0)(identity)([]); // 0;
countFromRight(1)(identity)([]); // 1;

var count = countFromRight(0);
count(identity)(numbers); // 6;
```

### SEE ALSO

- [countFrom](../countFrom/README.md)
- [count](../count/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [indexOf](../indexOf/README.md)
