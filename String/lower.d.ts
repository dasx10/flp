/**
  * @example
  * ```javascript
  * lower("FOO"); // "foo"
  * lower("foo"); // "foo"
  * lower("Foo"); // "foo"
  * lower("fOO"); // "foo"
  * lower("FoO"); // "foo"
  * lower("fOo"); // "foo"
  * lower(""); // ""
  * ```
  */
export default function lower<X extends string>(x: X): Lowercase<X>;
