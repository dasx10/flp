import type Lambda from "../../types/Lambda";
import type Index  from "../../types/Index";

import type countWhereEq from "./countWhereEq";
import type countWhereIs from "./countWhereIs";

/**
  * @see {@link countWhereEq}
  * @see {@link countWhereIs}
  */
export default function countWhere<Test extends Record<PropertyKey, Lambda>>(test: Test): <Values extends readonly any[]>(values: Values) => Index<Values>;
