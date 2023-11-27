declare var create: <
   _Key   extends PropertyKey,
  __Value extends Partial<Record<_Key, any>> = Partial<Record<_Key, any>>
>() => <
  Key    extends _Key,
  _Value extends __Value = __Value | Partial<Key, any>
>(key: Key) => <Value extends _Value>(value: Value) => Value[Key];

export default create;
