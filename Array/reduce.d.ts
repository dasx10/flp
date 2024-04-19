import type Conveyer from "../Types/Conveyer";

// export default function reduce<Return, X>(call: <Y extends Return>(y: Y) => (x: X) => Return)
//   : <Initial extends Return>(value: Initial)
//   => <Values extends readonly X[]>(values: Values) => Return;

export default function reduce<Y, X>(call: Conveyer<Y, X, Y>) : Conveyer<Y, Array<X>, Y>;
