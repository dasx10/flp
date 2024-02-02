export type IsUndefined<Value> = Value extends undefined ? true : false;
declare var isUndefined: {
  (value: undefined): true,
  (value: unknown): value is undefined
  <Value extends any>(value: Value): IsUndefined<Value>
};

export default isUndefined;
