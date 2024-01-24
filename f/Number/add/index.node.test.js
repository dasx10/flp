import { describe } from "node:test";
import create from "./.createUnitTest.js";
import add from "./index.js";

describe("add functional programming", () => {
  create(add);
});
