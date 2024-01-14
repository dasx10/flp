# Pow

1. [Procedures](../README.md)
    2. [Number](../README.md)
        3. [ceilTo](./README.md)

## DESCRIPTION

Rounds a number with a remainder to the specified number of decimal places. To a larger balance.

## USE

```javascript
import ceilTo from "flp/p/Number/ceilTo/index.js";
```

## EXAMPLES

```javascript
ceilTo(1.01, 1); // 1
ceilTo(1.05, 1); // 1
ceilTo(1.01, 2); // 1.01
ceilTo(1.019, 2); // 1.01
ceilTo(1.01, 3); // 1.01
ceilTo(1.0005, 3); // 1
```

### SEE ALSO

- [roundTo](../floorTo/README.md)
- [floorTo](../ceilTo/README.md)
