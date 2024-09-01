type True = true | readonly any[] | (object & {});
export default function or<Y>(y:Y): {
  <X extends True>(x: X): X;
  <X>(x:X): (X | Y);
}
export var then: (resolve: (value: typeof or) => any) => any;
