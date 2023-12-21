# AFTER

2. [Array](../README.md)
    3. [after](./README.md)


## USE 

```javascript
import after from "flp/Array/after";
```

## Examples

```javascript
const numbers     = [1, 2, 3, 4, 5];
const after3      = after(3); // (values) => [_, _, _, ...after3]
const newNumbers  = after3(numbers); // [4, 5]
```

### SEE ALSO

- [slice](../slice/README.md)
- [limit](../limit/README.md)
