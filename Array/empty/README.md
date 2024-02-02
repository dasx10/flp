# Empty

2. [Array](../README.md)
    3. [empty](./README.md)

## DESCRIPTION

Return always empty array.

## USE

```javascript
import empty from "flp/Array/empty/index.js";
```

## EXAMPLES

```javascript
empty();             // []
empty() === empty(); // true
const a = empty();   // []
a.push(1);
a                    // [];
empty() === a;       // true;
empty();             // []
```
