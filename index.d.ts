import type { Right, ToRight } from "./Monad/right"

import type Math from "./Math"

type Namespaces = "Math";
type ModulePath<Key extends `${Namespaces}/${string}`> = Key extends `${Namespaces}/${infer Module}` ? Module : never;
type Module    <Key extends `${Namespaces}/${string}`> = Right<Math[ModulePath<Key>]>;


declare const _: {
  <Value>(value: Value): Right<Value>;
  lazy: <Path extends `${Namespaces}/${string}`>(path: Path) => Module<Path>;
  load: <Path extends `${Namespaces}/${string}`>(path: Path) => Module<Path>;
}

export default _;
