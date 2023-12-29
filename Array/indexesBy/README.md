# INDEXES BY

2. [Array](../README.md)
    3. [indexesBy](./README.md)

## USE

```javascript
import indexesBy from "flp/Array/indexesBy";
```

## EXAMPLES

```javascript
const indexesUserAgeGt18 = indexesBy(user => user.age > 18);
const users = [{ age: 17 }, { age: 18 }, { age: 19 }, { age: 20 }];
indexesUserAgeGt18(users); // [2, 3];
 
const indexesUserAgeGe18 = indexesBy(user => user.age >= 18);
indexesUserAgeGe18(users); // [1, 2, 3];
```

### SEE ALSO

- [indexesByRight](../indexesByRight/README.md)
