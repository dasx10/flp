export default function notEmpty(values: readonly []): false;
export default function notEmpty<Value>(values: readonly [Value, ...readonly Value[]]): true;
export default function notEmpty<Value>(values: readonly Value[]): values is readonly ([Value, ...readonly Value[]] | [Value]);
