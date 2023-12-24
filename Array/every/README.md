# EVERY

2. [Array](../README.md)
    3. [every](./README.md)


## USE

```javascript
import every from "flp/Array/every/index.js";
```

## Examples

```javascript
var is5 = (value) => (value === 5);
var every5 = every(sub5);
every5([1, 2, 3, 4, 5]) // false
every5([1, 2, 3, 4, 6]) // false
every5([]) // true
every5([5]) // true
every5([5, 5, 5, 5, 5]) // true
```

### SEE ALSO

- [all](../all/README.md)
- [someRight](../someRight/README.md)
- [every](../every/README.md)
- [any](../any/README.md)
- [some](../some/README.md)
