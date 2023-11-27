declare var toSorted: Array<any>["sort"]   | { call: <T>(values: readonly T[], call: (a: T, b: T) => any) => T[]};

export default toSorted;
