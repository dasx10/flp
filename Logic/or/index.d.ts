export default function or<Next>(next: Next): <Value>(value: Value) => Next | Value;
