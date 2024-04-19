import type Conveyer from "../Types/Conveyer";
export default function flip<Return, Value, Next>(call: Conveyer<Return, Value, Next>): Conveyer<Return, Next, Value>;
