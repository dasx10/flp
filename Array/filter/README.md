# Filter
2. [Array](../README.md)
    3. [filter](./README.md)

## USE

```javascript
import filter from "flp/Array/filter";
```

## Examples

```javascript
var numbers     = [1, 2, 3, 4, 5];
var even        = (value) => value % 2 === 0;
var filterEven  = filter(even);
var eventValues = filterEven(numbers); // [2, 4];

var is5 = (value) => value === 5;
filter(is5)([1, 2, 3, 4, 5]); // [5];
filter(is5)([1, 2, 5, 4, 5]); // [5, 5];
filter(is5)([1, 2, 3, 4, 6]); // [];

var gt2 = (value) => value > 2;
filter(gt2)([1, 2, 3, 4, 5]); // [3, 4, 5];
filter(gt2)([]); // [];
filter(gt2)([1, 2]); // [];
```
