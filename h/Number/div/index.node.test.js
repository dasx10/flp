import { describe } from "node:test";

import createFunctionStyleUnitTest  from "../../../f/Number/div/.createUnitTest.js";
import createFunctionProcedureStyle from "../../../p/Number/div/.createUnitTest.js";

import div from "./index.js";

describe("div hybrid style", () => {
  createFunctionStyleUnitTest(div);
  createFunctionProcedureStyle(div);
});
