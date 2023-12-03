import type { MapExec } from "../map";
import type IterateCall from "../types/IterateCall";

export default function mapRight<Return, Value>(call: IterateCall<Return, Value>): MapExec<Return, Value>;
