# filterIndexMax

2. [Array](../README.md)
    3. [filterIndexMax](./README.md)

## Description

Returns an array of indices of the largest elements in the result


## USE

```javascript
import filterIndexMax from "flp/Array/filterIndexMax";
```

## Examples

```javascript
var findMaxIndexIdentity = filterIndexMax(identity);
findMaxIndexIdentity([1, 2, 3, 4, 5]); // [4];
findMaxIndexIdentity([1, 2, 3, 4, 5, 5]); // [4, 5];
findMaxIndexIdentity([5, 2, 3, 4, 5, 5]); // [0, 4, 5];
findMaxIndexIdentity([]); // [];

var getAge = (person) => person.age;
var persons = [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 20 }, { age: 30 }];
var filterIndexByMaxAge = filterIndexMax(getAge);
var result = filterIndexByMaxAge(persons); // [2, 4];
```

### SEE ALSO

- [filterIndexMin](./filterIndexMin/README.md)
- [findIndexMax](./findIndexMax/README.md)
- [findLastIndexMax](./findLastIndexMax/README.md)
