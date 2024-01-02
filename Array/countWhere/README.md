# COUNT WHERE

2. [Array](../README.md)
    3. [countWhere](./README.md)


## USE

```javascript
import countWhere from "flp/Array/countWhere/index.js";
```

## EXAMPLES

```javascript
var testArray = [{ name: "John" }, { name: "John" }, { name: "Susan" }, { name: "Alyx" }, { name: "Noname" }];
countWhere({ name: (name) => name === "John" })(testArray); // 2;
countWhere({ name: (name) => name !== "John" })(testArray); // 3;
countWhere({ name: (name) => name.length === 4 })(testArray); // 3;
countWhere({ name: (name) => name.length === 5 })(testArray); // 1;
```

### SEE ALSO

- [count](../count/README.md)
- [countBy](../countBy/README.md)
- [countOf](../countOf/README.md)
- [countWhereEq](../countWhereEq/README.md)
- [countWhereIs](../countWhereIs/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [reject](../reject/README.md)
- [sum](../sum/README.md)
