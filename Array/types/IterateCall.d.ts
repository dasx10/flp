import type Index from "./index";

// function iterateCall<Return, Value, Values extends readonly Value[]>(value: Value, index: number, values: Values): Return;
// function iterateCall<Return, Value>(value: Value, index: number): Return;
// function iterateCall<Return, Value>(value: Value): Return;

// // type IterateCall<
// //   Return,
// //   Value = any,
// //   Values extends readonly Value[] = readonly Value[],
// // > = {
// //   (value: Value & Values[number], index: Index<Values>, values: Values & (readonly Value[])): Return;
// // }


type IterateCall<
  Return = any,
  Value  = any,
  Values extends readonly Value[] = readonly Value[],
> = (value: Value & Values[Index<Values>], index: Index<Values>, value: Values) => Return

export default IterateCall;
