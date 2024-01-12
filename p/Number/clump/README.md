# CLUMP

1. [Procedures](../README.md)
    2. [Number](../README.md)
        3. [clump](./README.md)

## DESCRIPTION

Return between min and max value.


## USE

```javascript
import clump from "flp/p/Number/clump/index.js";"
```

## EXAMPLES

```javascript
clump(-1, 1, 4); // 1
clump(0, 1, 4); // 1
clump(1, 1, 4); // 1
clump(2, 1, 4); // 2
clump(3, 1, 4); // 3
clump(4, 1, 4); // 4
clump(5, 1, 4); // 4
clump(6, 1, 4); // 4
clump(1, 3, 5); // 3
clump(6, 3, 5); // 6
```

### SEE ALSO

- [max](../max/README.md)
- [min](../min/README.md)
- [between](../between/README.md)
- [lt](../lt/README.md)
- [gt](../lt/README.md)
