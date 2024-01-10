export default function rejectWhereEq<Test extends Record<PropertyKey, any>>(test: Test): <Values extends readonly any[]>(values: Values) => Values | [] | Values[number][];
