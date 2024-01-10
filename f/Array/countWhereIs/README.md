# COUNT WHERE IS

2. [Array](../README.md)
    3. [countWhereIs](./README.md)


## USE

```javascript
import countWhere from "flp/Array/countWhere/index.js";
```

## EXAMPLES

```javascript
var testArray = [{ name: "John" }, { name: "John" }, { name: "Susan" }, { name: "Alyx" }, { name: "Noname" }];
countWhereIs({ name: "John" })(testArray); // 2;
countWhereIs({ name: "Noname" })(testArray); // 1;
countWhereIs({ name: "Susan" })(testArray); // 1;
countWhereIs({ name: "Alyx" })(testArray); // 1;
countWhereIs({ name: "Jane" })(testArray); // 0;
```

### SEE ALSO

- [countWhere](../countWhere/README.md)
- [countWhereEq](../countWhereEq/README.md)
- [count](../count/README.md)
- [countBy](../countBy/README.md)
- [countOf](../countOf/README.md)
- [countWhereIs](../countWhereIs/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [reject](../reject/README.md)
- [sum](../sum/README.md)
