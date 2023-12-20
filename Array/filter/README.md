# Filter
2. [Array](../README.md)
    3. [filter](./README.md)

## USE

```javascript
import filter from "flp/Array/filter";
```

## Examples

```javascript
const numbers     = [1, 2, 3, 4, 5];
const even        = (value) => value % 2 === 0;
const filterEven  = filter(even);
const eventValues = filterEven(numbers); // [2, 4];
```
