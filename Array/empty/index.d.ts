/**
  * @summary Return []
  * @description Return always empty array.
  * @function
  * @name empty
  * @alias emptyArray
  * @returns {readonly []} `[]`
  * @example
  *
  * ```
  * empty();             // []
  * empty() === empty(); // true
  * const a = empty();   // []
  * a.push(1);
  * a                    // [];
  * empty() === a;       // true;
  * empty();             // []
  * ```
  */
export default function empty(): readonly [];
