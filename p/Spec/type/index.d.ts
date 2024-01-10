export type numeric = number | bigint;
export type primitiveValue = undefined | boolean | numeric | string | symbol;

export type Types = primitiveValue | "function" | "object";

type StringifyType<T extends primitiveValue> = T extends never ? never
: undefined extends T
  ? "undefined" | StringifyType<Exclude<T, undefined>>
  : boolean extends T
    ? "boolean" | StringifyType<Exclude<T, boolean>>
    : number extends T
      ? "number" | StringifyType<Exclude<T, number>>
      : string extends T
        ? "string" | StringifyType<Exclude<T, string>>
        : bigint extends T
          ? "bigint" | StringifyType<Exclude<T, bigint>>
          : symbol extends T
            ? "symbol" | StringifyType<Exclude<T, symbol>>
            : never
;

export default function type<Value extends primitiveValue>(value: Value): StringifyType<Value>;
export default function type(value): Types;
