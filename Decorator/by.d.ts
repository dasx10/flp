import Conveyer from "../Types/Conveyer";

export default function by<Y, X>(replace: (x: X) => Y)
  : <Return, Y1 extends Y = Y, X1 extends Y = Y>(call: (y1: Y1) => (x1: X1) => Return)
  // => <Y2 extends X>(y: Y2) => <X2 extends X>(x: X2) => Return;
  => Conveyer<Return, X, X>;

  // export default function by<Y, X>(replace: (x: X) => Y)
  //   : <Return>(call: (y: Y) => (x: Y) => Return)
  //   => (y: X) => (x: X) => Return;
