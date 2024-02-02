import type Lambda from "../../types/Lambda";

import type either from "./either";

/**
  * @see {@link either}
  */
export default function other<Return, Value>(call: Lambda<Return, Value>): <Next>(next: Lambda<Next, Value>) => Lambda<Return | Next, Value>;
