type PromiseResult<Value> = Value extends (Promise<any>)
  ? (Value)
  : (Promise<Value>);

export default PromiseResult;
