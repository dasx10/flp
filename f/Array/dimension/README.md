# DIMENSION 

2. [Array](../README.md)
    3. [dimension](./README.md)

## DESCRIPTION

Returns the original array if the length of the array has not changed.


## USE

```javascript
import dimension from "flp/Array/dimension/index.js";
```

## EXAMPLES

```javascript
var numbers = [1, 2, 3, 4];
dimension(numbers)(numbers); // [1, 2, 3, 4];
dimension(numbers.filter(x => x < 10))(numbers); // [1, 2, 3, 4];
dimension(numbers.filter(x => x < 10))(numbers) === numbers; // true;
dimension(numbers.filter(x => x < 2))(numbers); // [1];
```
