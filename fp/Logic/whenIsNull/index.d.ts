export default function whenIsNull<Return, Value>(call: (value: Value) => Return): {
  (value: Value): Return | null
};
