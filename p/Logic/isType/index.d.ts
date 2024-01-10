import type {
  PrimitiveValueTypeParse,
  Types,
  primitiveValue,
} from "../../Spec/type";

export default function typeIs(value: any, test: "undefined", ): value is undefined;
export default function typeIs(value: any, test: "boolean",   ): value is boolean;
export default function typeIs(value: any, test: "number",    ): value is number;
export default function typeIs(value: any, test: "string",    ): value is string;
export default function typeIs(value: any, test: "symbol",    ): value is symbol;
export default function typeIs(value: any, test: "bigint",    ): value is bigint;
export default function typeIs(value: any, test: "function",  ): value is Function;
export default function typeIs(value: any, test: "object",    ): value is object;

export default function typeIs<Value extends primitiveValue>(test: Types, value: Value): test is PrimitiveValueTypeParse<Value>;
export default function typeIs<Value>(test: Types, value: Value): boolean;
