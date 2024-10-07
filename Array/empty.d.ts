/**
  * @example
  * ```
  * empty() // []
  * empty() === empty() // true
  * ```
  * @description Creates an empty array
  * @function
  * @name empty
  * @returns {readonly[]}
  */
export default function empty(): readonly[];
export const then: (resolve: (value: typeof empty) => any) => any;
