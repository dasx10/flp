import type always from "../always";
import type identity from "../../Logic/identity";

/**
  * @name skip
  * @see {@link always}
  * @see {@link identity}
  */
export default function skip(): <Value>(value: Value) => <Return>(call: (value: Value) => Return) => Return;
