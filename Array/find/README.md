# FIND
- [Array](../README.md)
  - [find](.)

## USE

```javascript
import find from "flp/Array/find/index.js";
```

## EXAMPLES

```javascript
const numbers   = [1, 2, 3, 4, 5];
const even      = (value) => value % 2 === 0;
const findEven  = find(even);
const evenValue = findEven(numbers); // 2
```
