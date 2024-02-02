export default function whenDefined<Return, Value>(call: (value: Value) => Return): {
  (value: Value | undefined): Return | undefined;
};
