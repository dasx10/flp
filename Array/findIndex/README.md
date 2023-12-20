# FIND INDEX
- [Array](../README.md)
  - [findIndex](.)

## USE

```javascript
import findIndex from "flp/Array/findIndex/index.js";
```

## Examples

```javascript
const numbers       = [1, 2, 3, 4, 5];
const even          = (value) => value % 2 === 0;
const findIndexEven = find(even);
const evenValue     = findIndexEven(numbers); // 1
```

### SEE ALSO

- [find](../find/README.md)
