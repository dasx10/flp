# EQ

2. [Object](../README.md)
    3. [eq](./README.md)

## DESCRIPTION
Check equality two object, if objects are equal return true, else return false.

## USE

```javascript
import eq from "flp/Object/eq/index.js";
```

## EXAMPLES

```javascript
eq([])([]); // true;
eq({})({}); // true;
eq([1, 2, 3])([1, 2, 3]); // true;
eq({a:1})({a:1}); // true;
eq({a:1})({a:2}); // false;
eq(1)(1); // true;
eq(1)(2); // false;
```

### SEE ALSO

- [eq](../../Array/eq/README.md) [Array]("../../Array/README.md")
