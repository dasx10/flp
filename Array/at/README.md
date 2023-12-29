# AT

2. [Array](../README.md)
    3. [at](./README.md)


## USE

```javascript
import at from "flp/Array/at/index.js";
```

## EXAMPLES

```javascript
var numbers = [1, 2, 3, 4];
at(0)(numbers); // 1
at(1)(numbers); // 2
at(2)(numbers); // 3
at(3)(numbers); // 4
at(4)(numbers); // undefined
at(5)(numbers); // undefined
at(-1)(numbers); // 4
at(-2)(numbers); // 3
at(-3)(numbers); // 2
at(-4)(numbers); // 1
at(-5)(numbers); // undefined
```

### SEE ALSO

- [nth](../nth/README.md)
- [nthRight](../nthRight/README.md)
- [first](../first/README.md)
- [last](../last/README.md)
- [find](../find/README.md)
- [findLast](../findRight/README.md)
