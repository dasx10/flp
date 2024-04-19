/**
  * @name not
  * @description Inverts a boolean value.
  * @example
  * ```
  * not(true); // false
  * not(false); // true
  * ```
  */
export default function not(value: false): true;
export default function not(value: true): false;
export default function not(value: boolean): value is false;
