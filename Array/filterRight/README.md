# FILTER
2. [Array](../README.md)
    3. [filterRight](./README.md)

## USE

```javascript
import filterRight from "flp/Array/filterRight";
```

## EXAMPLES

```javascript
var numbers     = [1, 2, 3, 4, 5];
var even        = (value) => value % 2 === 0;
var filterEven  = filterRight(even);
var eventValues = filterEven(numbers); // [2, 4];

var is5 = (value) => value === 5;
filterRight(is5)([1, 2, 3, 4, 5]); // [5];
filterRight(is5)([1, 2, 5, 4, 5]); // [5, 5];
filterRight(is5)([1, 2, 3, 4, 6]); // [];

var gt2 = (value) => value > 2;
filterRight(gt2)([1, 2, 3, 4, 5]); // [3, 4, 5];
filterRight(gt2)([]); // [];
filterRight(gt2)([1, 2]); // [];
```

### SEE ALSO

- [filter](../filter/README.md)
- [rejectRight](../rejectRight/README.md)
- [reject](../reject/README.md)
- [findLast](../findLast/README.md)
- [find](../find/README.md)
- [filterRight](../filterRight/README.md)
- [filterWhere](../filterWhere/README.md)
- [filterWhereEq](../filterWhereEq/README.md)
- [filterWhereIs](../filterWhereIs/README.md)
- [filterWhereNot](../filterWhereNot/README.md)
- [count](../count/README.md)
- [rejectWhere](../rejectWhere/README.md)
- [rejectWhereEq](../rejectWhereEq/README.md)
- [rejectWhereIs](../rejectWhereIs/README.md)
- [rejectWhereNot](../rejectWhereNot/README.md)
- [uniq](../uniq/README.md)
- [uniqBy](../uniqBy/README.md)
- [individual](../individual/README.md)
- [individualBy](../individualBy/README.md)
