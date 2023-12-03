import type Lambda from "../../types/Lambda";

import type other from "./other";

/**
  * @see {@link other}
  */
export default function either<Return, Value>(call: Lambda<Return, Value>): <Next>(next: Lambda<Next, Value>) => Lambda<Return | Next, Value>;
