# EQ UN SORT

2. [Array](../README.md)
    3. [eqUnSort](./README.md)

## DESCRIPTION
Check equality two arrays, if arrays are equal return true, else return false. This function ignore order of array elements.

## USE

```javascript
import eq from "flp/Array/eq/index.js";
```

## EXAMPLES

```javascript
eqUnSort([])([]); // true;

eqUnSort([1, 2, 3])([1, 2, 3]); // true;
eqUnSort([1, 2, 3])([1, 2, 3, 4]); // false;
eqUnSort([1, 2, 3, 4])([1, 2, 3]); // false;
eqUnSort([1, 2, 3, 4])([1, 2, 3, 4]); // true;
eqUnSort([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]); // true;

eqUnSort([{}])([{}]); // true;
eqUnSort([{a:1}])([{a:1}]); // true;
eqUnSort([{a:1}])([{a:2}]); // false;
eqUnSort([{a:1}])([{a:1}, {a:2}]); // false;
eqUnSort([{a:1}, {a:2}])([{a:1}, {a:2}]); // true;
eqUnSort([{a:1}, {a:2}])([{a:1}, {a:3}]); // false;
eqUnSort([{a:3}, {a:2}, {a:1}])([{a:1}, {a:2}, {a:3}]); // false;
```

### SEE ALSO

- [eq](../eq/README.md)
- [eq](../../Object/eq/README.md) [Object]("../../Object/README.md")
- [isEmpty](../isEmpty/README.md)
- [isUnit](../isUnit/README.md)
