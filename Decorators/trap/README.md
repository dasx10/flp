# TRAP

2. [Decorators](../README.md)
    3. [trap](./README.md)

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
```

### SEE ALSO

- [trapAsync](../trapAsync/README.md)
- [trapBy](../trapBy/README.md)
- [trapWith](../trapWith/README.md)
