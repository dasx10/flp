# Mul

1. [Procedures](../README.md)
    2. [Number](../README.md)
        3. [mul](./README.md)

## DESCRIPTION

Multiply two numbers.


## USE

```javascript
import mul from "flp/p/Number/mul/index.js";
```

## EXAMPLES

```javascript
mul(1, 0); // 0
mul(0, 1); // 0
mul(1, 1); // 1
mul(0, 0); // 0
mul(1, 2); // 2
mul(2, 1); // 2
mul(2, 2); // 4
mul(0, 2); // 0
mul(2, 0); // 0
mul(10, 10); // 100
mul(NaN, 1); // NaN
mul(1, NaN); // NaN
```

### SEE ALSO

- [add](../add/README.md)
- [sub](../sub/README.md)
- [div](../div/README.md)
- [avg](../avg/README.md)
