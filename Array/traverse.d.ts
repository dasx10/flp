export default function traverse<Return, Value>(call: (x:Value) => (y: Return) => Return): (values: readonly[Value, ...Value[]]) => Return;
