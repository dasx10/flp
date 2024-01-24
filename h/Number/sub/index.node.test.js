import { describe } from "node:test";

import createProcedureStyleUnitTest from "../../../p/Number/sub/.createUnitTest.js";
import createFunctionStyleUnitTest from "../../../f/Number/sub/.createUnitTest.js";

import sub from "./index.js";

describe("subtract hybrid", () => {
  createProcedureStyleUnitTest(sub);
  createFunctionStyleUnitTest(sub);
});
