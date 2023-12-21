# ALL

2. [Array](../README.md)
    3. [all](./README.md)


## USE

```javascript
import all from "flp/Array/all";
```

## Examples

```javascript
var sub5    = (value) => (value - 5);
var allSub5 = all(sub5);
allSub5([]) // null
allSub5([1, 2, 3, 4, 5]) // 0
allSub5([1, 2, 3, 4, 6]) // 1
allSub5([1, 2, 3, 4]) // -1
```

### SEE ALSO

- [every](../every/README.md)
- [any](../any/README.md)
- [some](../some/README.md)
- [find](../find/README.md)
