# COUNT WHERE EQ

2. [Array](../README.md)
    3. [countWhereEq](./README.md)


## USE

```javascript
import countWhere from "flp/Array/countWhere/index.js";
```

## EXAMPLES

```javascript
var testArray = [{ name: "John" }, { name: "John" }, { name: "Susan" }, { name: "Alyx" }, { name: "Noname" }];
countWhereEq({ name: "John" })(testArray); // 2;
countWhereEq({ name: "Noname" })(testArray); // 1;
countWhereEq({ name: "Susan" })(testArray); // 1;
countWhereEq({ name: "Alyx" })(testArray); // 1;
countWhereEq({ name: "Jane" })(testArray); // 0;

const testArray2 = [{spec: {a:1, b:2}}, {spec: {a:1, b:2}}, {spec: {a:1, b:3}}];
countWhereEq({spec: {a:1, b:2}})(testArray2); // 2;
countWhereEq({spec: {a:1, b:3}})(testArray2); // 1;
countWhereEq({spec: {a:1, b:4}})(testArray2); // 0;
```

### SEE ALSO

- [countWhere](../countWhere/README.md)
- [countWhereIs](../countWhereIs/README.md)
- [count](../count/README.md)
- [countBy](../countBy/README.md)
- [countOf](../countOf/README.md)
- [countWhereIs](../countWhereIs/README.md)
- [length](../length/README.md)
- [filter](../filter/README.md)
- [reject](../reject/README.md)
- [sum](../sum/README.md)
