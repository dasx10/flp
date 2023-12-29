# INDEXES MAX BY

2. [Array](../README.md)
    3. [indexesMaxBy](./README.md)

## Description

Returns an array of indices of the largest elements in the result


## USE

```javascript
import indexesMaxBy from "flp/Array/indexesMaxBy";
```

## EXAMPLES

```javascript
var findMaxIndexIdentity = indexesMaxBy(identity);
findMaxIndexIdentity([1, 2, 3, 4, 5]); // [4];
findMaxIndexIdentity([1, 2, 3, 4, 5, 5]); // [4, 5];
findMaxIndexIdentity([5, 2, 3, 4, 5, 5]); // [0, 4, 5];
findMaxIndexIdentity([]); // [];

var getAge = (person) => person.age;
var persons = [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 20 }, { age: 30 }];
var filterIndexesByMaxAge = indexesMaxBy(getAge);
var result = filterIndexesByMaxAge(persons); // [2, 4];
```

### SEE ALSO

- [indexesMinBy](../indexesMinBy/README.md)
- [findIndexMax](../findIndexMax/README.md)
- [findLastIndexMax](../findLastIndexMax/README.md)
