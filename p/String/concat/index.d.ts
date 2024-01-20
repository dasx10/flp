export default function concat<Value extends string, Next extends string>(value: Value, next: Next): `${Value}${Next}`;
