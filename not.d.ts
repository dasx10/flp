type False = false | 0 | '' | null | undefined;
type True = true | [] | (object & {});

/**
  * @name not
  * @description Inverts a boolean value.
  * @example
  * ```
  * not(true); // false
  * not(false); // true
  * ```
  */
export default function not(value: False): true;
export default function not(value: True): false;
export default function not(value: boolean): value is false;
export default function not<X>(value: X): value is (False & X);
