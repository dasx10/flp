import Falsy from "../../types/Falsy";

export default function pickOr<Or>(or: Or): <Keys>(keys: readonly Keys[]) => <Value extends Partial<Record<Keys, any>>>(value: Value | Partial<Record<Keys, any>> | Partial<Record<Keys, Or>>) => {
  [Key in Keys]: Value[Key] extends Falsy ? Or : Falsy extends Value[Key] ? Value[Key] | Or : Value[Key]
}
