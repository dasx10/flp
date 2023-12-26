# ANY

2. [Array](../README.md)
    3. [any](./README.md)


## USE

```javascript
import any from "flp/Array/any/index.js";
```

## Examples

```javascript
var identity = (value) => value;
any(identity)([1, 2, 3, 4]); // 1;
any(identity)([0, 1, 2, 3]); // 1;
any(identity)([0, 0, 0]); // 0;
any(identity)([]); // undefined;
```

### SEE ALSO

- [all](../all/README.md)
- [some](../some/README.md)
- [every](../every/README.md)
