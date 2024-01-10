export default function eq<Next extends number>(next: Next): <Value extends number>(value: Value) => value is Next;
