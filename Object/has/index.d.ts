/**
  * @see {@link Reflect.has}
  */
export default function has <Key extends PropertyKey>(key: Key): {
  (value: { [Key]: any }): true;
  <Value extends Partial<Record<Key, any>>>(value: Value): value is Value & { [Key] : Required<Value>[Key] };
}
