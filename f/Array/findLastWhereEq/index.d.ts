export default function findLastWhereEq<Test extends Record<PropertyKey, any>>(test: Test)
  :  <Values extends readonly Record<PropertyKey, any>[]>(values: Values)
  => Values | [] | Values[number][];
