export default function has<Key extends PropertyKey>(key: Key): {
  (target: { [key in Key]: any }): true;
  <Target extends Record<PropertyKey, any>>(target: Omit<Target, Key>): false;
  <Target extends Record<PropertyKey, any>>(target: Target): target is Target & { [key in Key]: any }
};
