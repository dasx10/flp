# Pow

1. [Procedures](../README.md)
    2. [Number](../README.md)
        3. [roundTo](./README.md)

## DESCRIPTION

Rounds a number to a given number of decimal places.


## USE

```javascript
import roundTo from "flp/p/Number/roundTo/index.js";
```

## EXAMPLES

```javascript
roundTo(1.01, 1); // 1
roundTo(1.05, 1); // 1.1
roundTo(1.01, 2); // 1.01
roundTo(1.01, 3); // 1.01
roundTo(1.0005, 3); // 1.001
```

### SEE ALSO

- [floorTo](../floorTo/README.md)
- [ceilTo](../ceilTo/README.md)
