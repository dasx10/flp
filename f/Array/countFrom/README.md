# COUNT OF

2. [Array](../README.md)
    3. [countFrom](./README.md)


## USE

```javascript
import countFrom from "flp/Array/countFrom/index.js";
```

## EXAMPLES

```javascript
var numbers = [1, 2, 3];
var identity = (value) => value;
countFrom(0)(identity)(numbers); // 6;
countFrom(1)(identity)(numbers); // 7;
countFrom(10)(identity)(numbers); // 16;
countFrom(0)(identity)([]); // 0;
countFrom(1)(identity)([]); // 1;

var count = countFrom(0);
count(identity)(numbers); // 6;
```

### SEE ALSO

- [count](../count/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [indexOf](../indexOf/README.md)
