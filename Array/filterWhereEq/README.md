# FILTER WHERE
2. [Array](../README.md)
    3. [filterWhereEq](./README.md)

## DESCRIPTION

Filter by equality, return new filtered array.

## USE

```javascript
import filterWhereEq from "flp/Array/filterWhereEq/index.js";
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

filterWhereEq({
  age  : 20,
  name : "a",
})(users); // [{ name: "a", age: 20 }];

filterWhereEq({
  age  : 20,
  name : "b",
})(users); // [{ name: "b", age: 20 }];

filterWhereEq({
  age  : 30,
  name : "b",
})(users); // [{ name: "b", age: 30 }];

filterWhereEq({
  age: 20,
})(users); // [{ name: "a", age: 20 }, { name: "b", age: 20 }];

filterWhereEq({
  name: "a",
})(users); // [{ name: "a", age: 10 }, { name: "a", age: 20 }];

const newUsers = [
  { age: 10, name: "a", tags: ["a", "b"] },
  { age: 20, name: "a", tags: ["a", "c"] },
  { age: 20, name: "b", tags: ["a", "b"] },
];

filterWhereEq({
  tags: ["a"],
})(newUsers); // [];

filterWhereEq({
  tags: ["a", "b"],
})(newUsers); // [{ age: 10, name: "a", tags: ["a", "b"] }, { age: 20, name: "b", tags: ["a", "b"] }];
```

### SEE ALSO

- [filterWhere](../filterWhere/README.md)
- [filter](../filterWhereEq/README.md)
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
