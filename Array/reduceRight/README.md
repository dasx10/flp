# REDUCE RIGHT
- [Array](../README.md)
  - [reduceRight](.)

## USE

```javascript
import reduceRight from "flp/Array/reduceRight/index.js";
```

## Examples

```javascript
import add from "flp/Number/add/index.js";

var numbers = [1, 2, 3, 4, 5];
var sum = reduceRight(add)(0)(numbers); // 15

var names = ["John", "Mary", "Peter", "Alice"];
var concat = (next) => (value) => `${value} ${next}`;
var concatStrings = reduceRight(concat)("");
var result = concatStrings(names); // "AlicePeterMaryJohn"
```

