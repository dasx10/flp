import type Constanta from "../../types/Constanta";
import type Lambda    from "../../types/Lambda";

/**
  * @function
  * @name trap
  * @summary Creates a function that traps and manages promise-based or constant-returning functions.
  * @description
  * This function takes in various types of functions and returns a new function with specific behavior regarding promise handling.
  * If the provided function returns a promise, the newly returned function will consistently return the same promise on each call until it resolves. Upon resolution, subsequent calls will reprocess and await the completion of the promise.
  * Alternatively, if the function returns something other than a promise, the new function will still consistently return a promise. This behavior can be useful for processing data within a single event loop.
  * @param {Function} call - The function to be trapped and managed.
  * @returns {Function} - A new function that manages promise-based or constant-returning functions.
  * @example
  * ```
  * var getUserById = (id) => fetch(userUrl + "/" + id).then(user => user.json());
  * var getUserByIdTrap = trap(getUserById);
  * getUserByIdTrap(1); // Promise {<pending>}
  * getUserByIdTrap(1) === getUserByIdTrap(1); // true;
  * getUserByIdTrap(2) === getUserByIdTrap(2); // true;
  * getUserByIdTrap(1) === getUserByIdTrap(2); // false;
  * var waitUser1 = getUserByIdTrap(1);
  * waitUser1.then(() => waitUser1 === getUserByIdTrap(1)); // Promise<false>
  *
  * var counter = 0;
  * var increment = () => counter++;
  * var incrementTrap = trap(increment);
  * var waitInc = incrementTrap(); // Promise {<pending>}
  * console.log(counter); // 0;
  * await waitInc; // 1;
  * console.log(counter); // 1;
  * var waitInc2 = incrementTrap(); // Promise {<pending>}
  * var waitInc3 = incrementTrap(); // Promise {<pending>}
  * var waitInc4 = incrementTrap(); // Promise {<pending>}
  * console.log(counter); // 1;
  * await Promise.all([waitInc2, waitInc3, waitInc4]); // [2, 2, 2]
  * console.log(counter); // 2;
  * ```
  */
export default function trapAsync<Call extends Lambda<Promise<any>, any>>(call: Call): Call;
export default function trapAsync<Call extends Constanta<Promise<any>>>(call: Call): Call;
export default function trapAsync<Return>(call: Constanta<Return>): Constanta<Promise<Return>>;
export default function trapAsync<Return, Value>(call: Lambda<Return, Value>): Lambda<Promise<Return>, Value>;
