export type DeepPartialPath<
  Keys extends readonly PropertyKey[],
  Type = any
> = Keys extends readonly [infer Key, ...infer Next]
 ? Next extends readonly []
   ? Partial<Record<Key, DeepPartialPath<Next, Type>>>
   : Record<Key, DeepPartialPath<Next>>

 : Key extends readonly []
   ? Type
   : never
;

export type Path<Value extends Partial<Record<PropertyKey, any>>, Keys extends readonly PropertyKey[]> = Keys extends readonly [infer Key, ...infer Next]
  ? Path<Value[Key], Next>
  : Value
;

export default function path <Keys extends readonly PropertyKey[]>(keys : Keys): <Value extends DeepPartialPath<Keys, any>>(value : Value) => Path<Value, Keys>;
