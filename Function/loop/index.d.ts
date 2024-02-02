import type Monoid from "../../types/Monoid";

declare var loop: <
  Length extends number,
  _Value extends any         = any,
  _Call  extends Monoid<any> = Monoid<_Value>
>(length: Length) => <
  Value extends _Value,
  _Call extends Monoid<_Value> = Monoid<Value>
>(value: Value) => <
  Call extends _Call
>(call: Call) => ReturnType<Call>;

export default loop;
