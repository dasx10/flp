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

### SEE ALSO

- [findLast](../findLast/README.md)
- [findIndex](../findIndex/README.md)
- [findMax](../findMax/README.md)
- [findMin](../findMin/README.md)
- [filter](../filter/README.md)

#### COMPOSITION

- [findWhere](../findWhere/README.md)
- [findWhereEq](../findWhereEq/README.md)
- [findWhereIs](../findWhereIs/README.md)
