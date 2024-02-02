export default function curry3<Return, X, Y, Z>(call: (x: X, y: Y, z: Z) => Return): (z: Z) => (y: Y) => (x: X) => Return;
export default function curry3<Return, X, Y>   (call: (x: X, y: Y)       => Return): ()     => (y: Y) => (x: X) => Return;
export default function curry3<Return, X>      (call: (x: X)             => Return): ()     => ()     => (x: X) => Return;
export default function curry3<Return>         (call: ()                 => Return): ()     => ()     => ()     => Return;
