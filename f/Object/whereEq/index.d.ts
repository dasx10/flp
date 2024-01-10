export default function whereEq<Test extends Record<PropertyKey, any>>(test: Test): <Value extends Record<PropertyKey, any>>(value: Value | Partial<Test>) => boolean;
