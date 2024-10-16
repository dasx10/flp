import type ToProperty from "./ToProperty";

type Property<Value, Key> = Value[ToProperty<Key>] extends unknown
  ? Value extends Record<ToProperty<Key>, infer Is>
    ? Is
    : keyof Value extends ToProperty<Key>
      ? Value[keyof Value] | undefined
      : ToString<keyof Value> extends ToProperty<Key>
        ? Value[keyof Value] | undefined
        : undefined
  : Value[ToProperty<Key>]
;

export default Property;
