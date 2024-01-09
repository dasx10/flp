# INDEXES BY

2. [Array](../README.md)
    3. [indexesByRight](./README.md)

## USE

```javascript
import indexesByRight from "flp/Array/indexesByRight";
```

## EXAMPLES

```javascript
const indexesUserAgeGt18 = indexesByRight(user => user.age > 18);
const users = [{ age: 17 }, { age: 18 }, { age: 19 }, { age: 20 }];
indexesUserAgeGt18(users); // [2, 3];
 
const indexesUserAgeGe18 = indexesByRight(user => user.age >= 18);
indexesUserAgeGe18(users); // [1, 2, 3];
```

### SEE ALSO

- [indexesBy](../indexesBy/README.md)
