# filterIndexesMin

2. [Array](../README.md)
    3. [filterIndexesMin](./README.md)

## Description

Returns an array of indices of the smaller elements in the result


## USE

```javascript
import filterIndexesMin from "flp/Array/filterIndexesMin";
```

## Examples

```javascript
var findMinIndexIdentity = filterIndexesMin(identity);
findMinIndexIdentity([1, 2, 3, 4, 0]); // [4];
findMinIndexIdentity([1, 2, 3, 4, 0, 0]); // [4, 5];
findMinIndexIdentity([0, 2, 3, 4, 0, 0]); // [0, 4, 5];
findMinIndexIdentity([]); // [];

var getAge = (person) => person.age;
var persons = [{ age: 50 }, { age: 20 }, { age: 10 }, { age: 20 }, { age: 10 }];
var filterIndexesByMinAge = filterIndexesMin(getAge);
var result = filterIndexesByMinAge(persons); // [2, 4];
```

### SEE ALSO

- [filterIndexesMax](../filterIndexesMax/README.md)
- [findIndexMax](../findIndexMax/README.md)
- [findLastIndexMax](../findLastIndexMax/README.md)
