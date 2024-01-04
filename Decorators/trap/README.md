# TRAP

2. [Decorators](../README.md)
    3. [trap](./README.md)

## SUMMARY

Creates a function that traps and manages promise-based or constant-returning functions.


## DESCRIPTION

  - This function takes in various types of functions and returns a new function with specific behavior regarding promise handling.
  - If the provided function returns a promise, the newly returned function will consistently return the same promise on each call until it resolves. Upon resolution, subsequent calls will reprocess and await the completion of the promise.
  - Alternatively, if the function returns something other than a promise, the new function will still consistently return a promise.This behavior can be useful for processing data within a single event loop.


## EXAMPLES

```javascript
var getUserById = (id) => fetch(userUrl + "/" + id).then(user => user.json()); // Object<user>
var getUserByIdTrap = trap(getUserById); // (id) => Promise<Object<user>>
getUserByIdTrap(1); // Promise {<pending>}
getUserByIdTrap(1) === getUserByIdTrap(1); // true;
getUserByIdTrap(2) === getUserByIdTrap(2); // true;
getUserByIdTrap(1) === getUserByIdTrap(2); // false;
var waitUser1 = getUserByIdTrap(1); // Promise {<pending>}
waitUser1.then(() => waitUser1 === getUserByIdTrap(1)); // Promise<false>

var counter = 0;
var increment = () => counter++;
var incrementTrap = trap(increment);
var waitInc = incrementTrap(); // Promise {<pending>}
console.log(counter); // 0;
await waitInc; // 1;
console.log(counter); // 1;
var waitInc2 = incrementTrap(); // Promise {<pending>}
var waitInc3 = incrementTrap(); // Promise {<pending>}
var waitInc4 = incrementTrap(); // Promise {<pending>}
console.log(counter); // 1;
await Promise.all([waitInc2, waitInc3, waitInc4]); // [2, 2, 2]
console.log(counter); // 2;
```

### SEE ALSO

- [trapBy](../trapBy/README.md)
- [trapWith](../trapWith/README.md)
