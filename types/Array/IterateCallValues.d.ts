import ArrayValue from "./Value";
import ArrayIndex from "./Index";

type ArrayIterateCallValues<
  Return = any,
  Values extends readonly any[] = readonly any[],
> = (
  value  : ArrayValue<Values>,
  index  : ArrayIndex<Values>,
  values : Values
) => Return;

export default ArrayIterateCallValues;
