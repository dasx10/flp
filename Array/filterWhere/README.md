# FILTER WHERE
2. [Array](../README.md)
    3. [filterWhere](./README.md)

## USE

```javascript
import filterWhere from "flp/Array/filterWhere/index.js";
```

## EXAMPLES

```javascript
const users = [
  { name: "a", age: 10 },
  { name: "a", age: 20 },
  { name: "b", age: 20 },
  { name: "b", age: 30 },
  { name: "c", age: 30 }
];

filterWhere({
  age  : (age)  => age > 10,
  name : (name) => name === "a",
})(users); // [{ name: "a", age: 20 }];

filterWhere({
  age  : (age)  => age < 30,
  name : (name) => name === "b" || name === "c",
})(users); // [{ name: "b", age: 20 }];

filterWhere({
  age  : (age)  => age > 20,
  name : (name) => name === "b" || name === "c",
})(users); // [{ name: "b", age: 30 }, { name: "c", age: 30 }];
```

### SEE ALSO

- [filter](../filterWhere/README.md)
- [filterWhereEq](../filterWhereEq/README.md)
- [filterWhereIs](../filterWhereIs/README.md)
- [filterWhereNot](../filterWhereNot/README.md)
- [reject](../reject/README.md)
- [rejectWhere](../rejectWhere/README.md)
- [rejectWhereEq](../rejectWhereEq/README.md)
- [rejectWhereIs](../rejectWhereIs/README.md)
- [rejectWhereNot](../rejectWhereNot/README.md)
- [find](../find/README.md)
- [filterRight](../filterRight/README.md)
- [count](../count/README.md)
- [uniq](../uniq/README.md)
- [uniqBy](../uniqBy/README.md)
- [individual](../individual/README.md)
- [individualBy](../individualBy/README.md)
