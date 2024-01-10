import ArrayValue             from "./Value";
import ArrayIndex             from "./Index";
import ArrayIterateCallValues from "./IterateCallValues";

type ArrayIterateCallValue<
  Return = any,
  Value  = any,
  Values extends readonly Value[] = readonly Value[],
> = ArrayIterateCallValues<Return, Values & readonly Value[]>

export default ArrayIterateCallValue;
