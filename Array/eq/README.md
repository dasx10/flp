# EQ

2. [Array](../README.md)
    3. [eq](./README.md)

## DESCRIPTION
Check equality two arrays, if arrays are equal return true, else return false.

## USE

```javascript
import eq from "flp/Array/eq/index.js";
```

## EXAMPLES

```javascript
eq([1, 2, 3])([1, 2, 3]); // true;
eq([1, 2, 3])([1, 2, 3, 4]); // false;
eq([1, 2, 3, 4])([1, 2, 3]); // false;
eq([1, 2, 3, 4])([1, 2, 3, 4]); // true;
eq([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]); // false;
```
