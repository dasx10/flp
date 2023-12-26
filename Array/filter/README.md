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

### SEE ALSO

- [find](../find/README.md)
- [reject](../reject/README.md)
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
