import { describe } from "node:test";
import __functionLength2 from "../../__test__/__functionLength2";

export default (call, values) => {
  describe("ne (not equal)", () => {
    __functionLength2(call);

    it("must be current value", () => {
      values.forEach((value1) => {
        values.forEach((value2) => {
          assert.strictEqual(call(value1, value2), value1 !== value2);
        });
      });
    });
  });
};
