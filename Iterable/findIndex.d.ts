type LambdaTest<Predicate, Value> = (value: Value) => value is Predicate;

type IndexOf<Test extends (x: any) => any, Values extends Iterable<any>> = Values extends readonly any[]
  ? Test extends LambdaTest<infer Predicate, any>
    ? Values extends readonly []
      ? -1
      : Values extends readonly [...infer Head, infer Last]
        ? Last extends Predicate
          ? Head["length"] | IndexOf<Test, Head>
          : Predicate extends Last
            ? Head["length"] | IndexOf<Test, Head>
            : -1 | IndexOf<Test, Head>
        : Predicate extends Last
          ? Head["length"] | IndexOf<Test, Head>
          : -1 | IndexOf<Test, Head>
      : number
    : number
;

/**
  * @example
  * ```javascript
  * findIndex(x => x === 2)([1, 2, 3]) // 1
  * findIndex(x => x === 4)([1, 2, 3]) // -1
  * findIndex(x => x === 3)(new Set([1, 2, 3])) // 2
  * findIndex(x => x === 4)(new Set([1, 2, 3])) // -1
  * findIndex(x => x === 2)(function*() { yield 1; yield 2; yield 3; }()) // 1
  * findIndex(x => x === 10)(function*() { yield 1; yield 2; yield 3; }()) // -1
  * ```
  * @description returns the index of the first truthy value
  * @function
  * @name findIndex
  * @param {function} call
  * @return {function}
  */
export default function findIndex<Test extends (x: any) => x is any>(call: Test): <Values extends Iterable<any>>(values: Values) => IndexOf<Test, Values>;

const a = findIndex((x: number): X is 0 => x === 0)([1, 2, 0, 4]) as const
