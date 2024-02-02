export default function curry4<Return, X, Y, Z, O> (call: (x: X, y: Y, z: Z, o: O) => Return): (o: O) => (z: Z) => (y: Y) => (x: X) => Return;
export default function curry4<Return, X, Y, Z>    (call: (x: X, y: Y, z: Z)       => Return): ()     => (z: Z) => (y: Y) => (x: X) => Return;
export default function curry4<Return, X, Y>       (call: (x: X, y: Y)             => Return): ()     => ()     => (y: Y) => (x: X) => Return;
export default function curry4<Return, X>          (call: (x: X)                   => Return): ()     => ()     => ()     => (x: X) => Return;
export default function curry4<Return>             (call: ()                       => Return): ()     => ()     => ()     => ()     => Return;
