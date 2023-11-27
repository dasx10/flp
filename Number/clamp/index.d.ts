declare const clamp: <
    Min   extends number,
   _Max   extends number = number,
  __Value extends number = number,
>(min: Min) => <
  Max   extends  _Max,
 _Value extends __Value = __Value
>(max: Max) => <Value extends _Value>(value: Value) => Min | Max | Value;

export default clamp;
