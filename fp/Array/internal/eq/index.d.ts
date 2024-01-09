export default function _eq<Values extends readonly any[], Next extends readonly any[]>(values: Values, next: Next): values is Next;
export default function _eq<Values extends readonly any[], Next extends readonly any[]>(values: Values, next: Next): next is Values;

