# MAP
- [Array](../README.md)
  - [map](.)

## USE

```javascript
import map from "flp/Array/map/index.js";
```

## EXAMPLES

```javascript
const numbers   = [1, 2, 3, 4, 5];
const addOne    = (value) => value + 1;
const mapAddOne = map(addOne);
const result    = mapAddOne(numbers); // [2, 3, 4, 5, 6];
const result2   = mapAddOne(result); // [3, 4, 5, 6, 7];
```
