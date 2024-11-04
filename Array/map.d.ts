export type FillAll<Values extends readonly any[], Value> = Values extends readonly []
  ? readonly []
  : Values extends readonly [any, ...infer Tail]
    ? readonly [Value, ...FillAll<Tail, Value>]
    : Values extends readonly any[]
      ? readonly Value[] | readonly []
      : unknown
;

type Maping<Return, Value> = <Values extends readonly Value[]>(values: Values) => FillAll<Values, Return>;

type Parameter<Call> = Call extends (value: infer Value) => any
  ? Value
  : never
;

type Returns<Call> = Call extends (...values: readonly any[]) => infer Return
  ? Return
  : never
;

/**
  * @example
  * ```javascript
  * map(x => x + 1)([1, 2, 3]); // [2, 3, 4]
  * map(x => x + 1)([]); // []
  * map(String)([1, 2, 3]); // ["1", "2", "3"]
  * ```
  * @description Map an array
  * @param {function call
  * @returns {function}
  * @name map
  */
// export default function map<Return, Value>(call: (value: Value) => Return): Maping<Return, Value>;
export default function map<Call extends (value: any) => unknown>(call: Call): Maping<Returns<Call>, Parameter<Call>>;
export var then : (resolve: (module: typeof map) => any) => any;
