export default function pair<Return, O = any, X = any, Y = any>(decorator: (call: (x: X) => Y) => (o: O) => Return)
  : (call: (y: X) => (x: X) => Y)
  => (y: O) => (x: O) => Return;
