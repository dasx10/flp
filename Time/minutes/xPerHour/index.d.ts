import type Lambda from "../../../types/Lambda";
import type { MINUTES_PER_HOUR } from "../perHour";

declare var xPerHour: <Call extends Lambda<(number | MINUTES_PER_HOUR), any>>(call: Call) => () => ReturnType<Call>;
export default xPerHour;
