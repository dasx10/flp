# BETWEEN

1. [Procedures](../README.md)
    2. [Number](../README.md)
        3. [between](./README.md)

## DESCRIPTION

Test value is between two numbers. Is equal to `x > y & x < z`


## USE

```javascript
import between from "flp/p/Number/between/index.js";"
```

## EXAMPLES

```javascript
between(1, 2, 3); // false
between(2, 2, 3); // false
between(3, 2, 3); // false
between(0, 0, 10); // false
between(1, 0, 10); // true
between(2, 0, 10); // true
between(3, 0, 10); // true
between(5, 0, 10); // true
between(6, 0, 10); // true
between(7, 0, 10); // true
between(8, 0, 10); // true
between(9, 0, 10); // true
between(10, 0, 10); // false
```

### SEE ALSO

- [lt](../lt/README.md)
- [gt](../lt/README.md)
