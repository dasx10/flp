export default function rejectWhereIs<Test extends Record<PropertyKey, any>>(test: Test): <Values extends readonly any[]>(values: Values) => Values | [] | Values[number][];
