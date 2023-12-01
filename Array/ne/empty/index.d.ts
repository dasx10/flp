export default function neEmpty(values: []): false;
export default function neEmpty<Values extends readonly any[]>(values: Values): values is [Values[0], ...Values]
