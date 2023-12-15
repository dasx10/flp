type MayPromise<Value> = Value extends Promise<any> ? Value : (Promise<Value> | Value);
export default MayPromise;
