import { describe } from "node:test";

import createFunctionStyleUnitTest  from "../../../f/Number/add/.createUnitTest.js";
import createProcedureStyleUnitTest from "../../../p/Number/add/.createUnitTest.js";

import add from "./index.js";

describe("add hybrid", () => {
  createProcedureStyleUnitTest(add);
  createFunctionStyleUnitTest(add);
});
