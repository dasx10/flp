import type {
  PrimitiveValueTypeParse,
  Types,
  primitiveValue,
} from "../../../pp/Spec/type";

export default function isType(test: "undefined"): (value: any) => value is undefined;
export default function isType(test: "boolean"  ): (value: any) => value is boolean;
export default function isType(test: "number")   : (value: any) => value is number;
export default function isType(test: "string")   : (value: any) => value is string;
export default function isType(test: "symbol")   : (value: any) => value is symbol;
export default function isType(test: "bigint")   : (value: any) => value is bigint;
export default function isType(test: "function") : (value: any) => value is Function;
export default function isType(test: "object")   : (value: any) => value is object;
export default function isType(test: Types): {
  <Value extends primitiveValue>(value: Value): value is PrimitiveValueTypeParse<Value>;
  <Value>(value: Value): boolean;
}

