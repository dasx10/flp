import Index from "./index";

type IterateCall<
  Return,
  Value = any,
  Values extends readonly Value[] = readonly Value[],
> = (value: Value, index: Index<Values>, values: Values) => Return;

export default IterateCall;
