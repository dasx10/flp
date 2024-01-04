import type Constanta from "../../types/Constanta";
import type Lambda    from "../../types/Lambda";

/**
  * @function
  * @name trap
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
  * ```
  */
export default function trap<Call extends Lambda<Promise<any>, any>>(call: Call): Call;
export default function trap<Call extends Constanta<Promise<any>>>(call: Call): Call;
export default function trap<Return>(call: Constanta<Return>): Constanta<Promise<Return>>;
export default function trap<Return, Value>(call: Lambda<Return, Value>): Lambda<Promise<Return>, Value>;
