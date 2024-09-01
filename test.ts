import pipe from "./pipe";

const add = (x:number) => (y:number) => x + y

const str = (x: number) => String(x);
const num = (x: string) => Number(x);

import('./pipe').then((pipe) => pipe)

const add6 = pipe<number, number, string, number, number>([
  add(3),
  str,
  num,
  add(3),
]);

const a = pipe([
  add(1),
  add(1),
  String,
])

const b = add6(33)
