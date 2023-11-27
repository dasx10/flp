type _nil = null | undefined;
type nil<Value extends _nil = _nil> = Value;
export default nil;
