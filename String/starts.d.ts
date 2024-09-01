export default function starts<Y extends string>(y: Y): {
  (x: Y | `${Y}${string}`): true;
  <X extends string>(x: X): x is X & (`${Y}${string}` | Y);
  (x: string): x is (`${Y}${string}` | Y);
}

export default function starts(y: string): (x: string) => boolean;
