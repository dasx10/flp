import either from '.';

var a = either((right, left) => (value: number) => right(value))

const aa = a(10)
aa(x => x)

var b = either.right(1)
b(x => x)
