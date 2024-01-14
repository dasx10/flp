# Pow

1. [Procedures](../README.md)
    2. [Number](../README.md)
        3. [floorTo](./README.md)

## DESCRIPTION

Rounds a number with a remainder to the specified number of decimal places. To a smaller balance.


## USE

```javascript
import floorTo from "flp/p/Number/floorTo/index.js";
```

## EXAMPLES

```javascript
floorTo(1.01, 1); // 1
floorTo(1.05, 1); // 1
floorTo(1.01, 2); // 1.01
floorTo(1.019, 2); // 1.01
floorTo(1.01, 3); // 1.01
floorTo(1.0005, 3); // 1
```

### SEE ALSO

- [roundTo](../floorTo/README.md)
- [ceilTo](../ceilTo/README.md)
