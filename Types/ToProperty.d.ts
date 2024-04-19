import type ToString from "./ToString";
type ToProperty<Key> = Key extends PropertyKey ? Key : ToString<Key>;
export default ToProperty;
