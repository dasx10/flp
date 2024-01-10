# AFTER

2. [Array](../README.md)
    3. [after](./README.md)

## DESCRIPTION

Create new array after index.


## USE 

```javascript
import after from "flp/Array/after";
```

## EXAMPLES

```javascript
var numbers     = [1, 2, 3, 4, 5];
var after3      = after(3); // (values) => [_, _, _, ...after3]
var newNumbers  = after3(numbers); // [4, 5]

after(0)([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
after(1)([1, 2, 3, 4, 5]); // [2, 3, 4, 5]
after(2)([1, 2, 3, 4, 5]); // [3, 4, 5]
after(3)([1, 2, 3, 4, 5]); // [4, 5]
after(4)([1, 2, 3, 4, 5]); // [5]
after(5)([1, 2, 3, 4, 5]); // []
after(6)([1, 2, 3, 4, 5]); // []
```

### SEE ALSO

- [slice](../slice/README.md)
- [limit](../limit/README.md)
