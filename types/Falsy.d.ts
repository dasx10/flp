import type nil from "./Nil";

type _Falsy = false | 0 | -0 | 0n | "" | nil;

type Falsy<Value extends _Falsy = _Falsy> = Value;
export default Falsy;
