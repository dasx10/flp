import constructor from "../constructor.js"
import id from "../Logic/id.js"

var Function = (
  constructor(id) ||
  (globalThis && globalThis.Function && typeof globalThis.Function === "function" && globalThis.Function)
);

export default Function;
