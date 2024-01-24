import { describe } from "node:test";

import createProcedureStyleUnitTest from "../../../p/Number/mul/.createUnitTest.js";
import createFunctionStyleUnitTest from "../../../f/Number/mul/.createUnitTest.js";

import mul from "./index.js";

describe("mul hybrid style", () => {
  createProcedureStyleUnitTest(mul);
  createFunctionStyleUnitTest(mul);
});
