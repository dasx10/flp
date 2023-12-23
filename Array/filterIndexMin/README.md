# filterIndexMin

2. [Array](../README.md)
    3. [filterIndexMin](./README.md)

## Description

Returns an array of indices of the smaller elements in the result


## USE

```javascript
import filterIndexMin from "flp/Array/filterIndexMin";
```

## Examples

```javascript
var findMinIndexIdentity = filterIndexMin(identity);
findMinIndexIdentity([1, 2, 3, 4, 0]); // [4];
findMinIndexIdentity([1, 2, 3, 4, 0, 0]); // [4, 5];
findMinIndexIdentity([0, 2, 3, 4, 0, 0]); // [0, 4, 5];
findMinIndexIdentity([]); // [];

var getAge = (person) => person.age;
var persons = [{ age: 50 }, { age: 20 }, { age: 10 }, { age: 20 }, { age: 10 }];
var filterIndexByMinAge = filterIndexMin(getAge);
var result = filterIndexByMinAge(persons); // [2, 4];
```

### SEE ALSO

- [filterIndexMax](./filterIndexMax/README.md)
- [findIndexMax](./findIndexMax/README.md)
- [findLastIndexMax](./findLastIndexMax/README.md)
