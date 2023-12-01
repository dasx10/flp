export default function is<Next extends readonly any[]>(next: Next): {
  <Value extends readonly any[]>(value: Value): value is Next;
};
