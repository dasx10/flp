# EVERY

2. [Array](../README.md)
    3. [every](./README.md)


## DESCRIPTION
Returns true if all elements pass the test.


## USE

```javascript
import every from "flp/Array/every/index.js";
```


## EXAMPLES

```javascript
var is5 = (value) => (value === 5);
var every5 = every(sub5);
every5([1, 2, 3, 4, 5]) // false
every5([1, 2, 3, 4, 6]) // false
every5([]) // true
every5([5]) // true
every5([5, 5, 5, 5, 5]) // true
```


### SEE ALSO

- [all](../all/README.md)
- [some](../some/README.md)
- [everyRight](../everyRight/README.md)
- [someRight](../someRight/README.md)
- [any](../any/README.md)
