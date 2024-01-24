import type Conveyor from "../../../types/Conveyor";
import type Lambda   from "../../../types/Lambda";

export default function partial<Call extends Lambda<any, any>>(call: Call): Call;

export default function partial<Return, Value, Next>(call: (value: Value, next: Next) => Return): {
  (value: Value, next: Next): Return;
} | Conveyor<Return, Value, Next>;


export default function partial<Return, X, Y, Z>(call: (x: X, y: Y, z: Z) => Return): {
  (x: X, y: Y, z: Z) : Return;
  (y: Y, z: Z)       : Lambda<Return, X>;
  (z: Z)             : Conveyor<Return, X, Y> | ((x: X, y: Y) => Return);
};

export default function partial<Return, X, Y, Z, O>(call: (x: X, y: Y, z: Z, o: O) => Return): {
  (x: X, y: Y, z: Z, o: O) : Return;
  (y: Y, z: Z, o: O)       : Lambda<Return, X>;
  (z: Z, o: O)             : Conveyor<Return, X, Y> | ((x: X, y: Y) => Return);
  (o: O)                   : {
    (x: X, y: Y, z: Z) : Return;
    (y: Y, z: Z)       : Lambda<Return, X>;
    (z: Z)             : Conveyor<Return, X, Y> | ((x: X, y: Y) => Return);
  }
};
