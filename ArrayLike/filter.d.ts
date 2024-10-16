export default function filter<Value>(call: (value: Value) => boolean): <Values extends ArrayLike<Value>>(values: Values) => Values;
export default function filter<Is, Value>(call: (value: Value) => value is Is): <Values extends ArrayLike<Value>>(values: Values) => Values & ArrayLike<Is>;
