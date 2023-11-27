export type IsNull<Value> = Value extends null ? true : false;
declare var isNull: {
  (value: null): true,
  (value: unknown): value is null;
  <Value extends any>(value: Value): IsNull<Value>
};

export default isNull;
