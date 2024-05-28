export default function last<Value>(values: readonly [...any[], Value]): Value;
export default function last(values: readonly []): undefined;
export default function last<Value>(values: readonly Value[]): Value | undefined;
