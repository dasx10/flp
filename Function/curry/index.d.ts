export type Curry<Call extends ((...values: any[]) => any)> = Call extends (...next: infer Next) => infer Return
  ? Next extends readonly [...infer Next, infer LastParameter]
    ? <Value extends LastParameter>(value: Value) => Curry<(...next: Next) => Return>
    : Return
  : Next extends readonly [infer Value]
    ? Call
    : Return
  ;

export default function curry<Call extends (x: any, y: any, ...next: readonly any[]) => any>(call: Call): Curry<Call>;
