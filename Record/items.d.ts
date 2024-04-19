type Items<Value, Keys extends readonly(string|number)[]> = Keys extends readonly[infer Key, ...infer Tail]
  ? readonly [Value[Key], ...Items<Value, Tail>]
  : Keys extends readonly []
    ? readonly []
    : Keys extends ArrayLike<infer Key>
      ? readonly(Value[Key])[]
      : readonly unknown[] | []
    ;

export default function items<Keys extends readonly(string|number)[]>(keys: Keys):<Value extends Record<Keys[number], any>>(value: Value)=>Items<Value, Keys>;
