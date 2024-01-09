import type concat  from "../concat";
import type append  from "../append";
import type prepend from "../prepend";

/**
  * @function
  * @name concatRight
  * @param {Array} next
  * @returns {Function}
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * concatRight([5])(numbers); // [5, 1, 2, 3, 4];
  * concatRight([6, 7])(numbers); // [6, 7, 1, 2, 3, 4];
  * concatRight([8, 9, 10])(numbers); // [8, 9, 10, 1, 2, 3, 4];
  * concatRight(numbers)(numbers); // [1, 2, 3, 4, 1, 2, 3, 4];
  * ```
  * @see {@link concat}
  * @see {Array.prototype.concat}
  * @see {@link prepend}
  * @see {@link append}
  */
export default function concatRight<Next extends readonly any[]>(next: Next): <Values extends readonly any[]>(values: Values) => [...Next, ...Values];
