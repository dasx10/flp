export default function ends<Y extends string>(y: Y): {
  (x: Y | `${string}${Y}`): true;
  <X extends string>(x: X): x is X & (`${string}${Y}` | Y);
  (x: string): x is (`${string}${Y}` | Y);
}
