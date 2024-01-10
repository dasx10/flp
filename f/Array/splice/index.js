import gt   from "../../Number/internal/gt/index.js";
import drop from "../internal/drop/index.js";

export default (min) => (max) => gt(min, max)
  ? (values) => drop(values, max, min)
  : (values) => drop(values, min, max)
;
