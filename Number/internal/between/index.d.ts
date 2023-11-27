import type NumberExclude from "../../types/NumberExclude";

export default function _between<
  Value extends number,
  Min   extends number,
  Max   extends number,
>(value: Value, min: Min, max: Max): value is NumberExclude<Value, Min | Max>;
