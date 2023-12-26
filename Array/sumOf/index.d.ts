export default function sumOf<Value extends number>(value: Value): {
  (values: readonly []): Value;
  (values: readonly number[]): Value | number;
}
