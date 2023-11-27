import type Lambda from "../../../types/Lambda";

type ClassCollection <Type = any, key = PropertyKey> = new () => {
  get : Lambda<Key, Type>,
  set : (key: Key, value: Type) => any,
}

export default function memoCreate<Constructor extends ClassCollection>(Map: Constructor): <Call extends Lambda<any, any>>(call: Call) => Call;
