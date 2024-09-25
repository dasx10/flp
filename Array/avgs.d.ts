/**
  * @example
  * ```javascript
  * avgs([1, 2, 3]); // 2
  * avgs([1, 2, 3, 4]); // 2.5
  * avgs([]); // NaN
  * avgs([1, 1, 1]); // 1
  * avgs([1]); // 1
  * avgs([5, 15]); // 10
  * ```
  * @description Get the average of an array
  * @param {number[]} values
  * @returns {number}
  */
export default function avgs<Values extends readonly number[]>(values: Values): number;
export var then: (resolve: (value: typeof avgs) => any) => any;
