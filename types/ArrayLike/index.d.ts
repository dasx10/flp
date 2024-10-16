interface _ArrayLike<Value> extends ArrayLike<Value> {
  readonly length: number;
  readonly [index: number]: Value;
}

export default _ArrayLike;
