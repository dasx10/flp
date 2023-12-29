# ALL

2. [Array](../README.md)
    3. [allRight](./README.md)


## USE

```javascript
import allRight from "flp/Array/allRight/index.js";
```

## EXAMPLES

```javascript
var sub5    = (value) => (value - 5);
var allSub5 = allRight(sub5);
allSub5([]) // null
allSub5([1, 2, 3, 4, 5]) // 0
allSub5([1, 2, 3, 4, 5, 6, 7, 8]) // 0
allSub5([1, 2, 3, 4, 6]) // 1
allSub5([1, 2, 3, 4]) // -1
```

### SEE ALSO

- [all](../all/README.md)
- [someRight](../someRight/README.md)
- [every](../every/README.md)
- [any](../any/README.md)
- [some](../some/README.md)
