import type Test from "../../../../types/Test";
export type IsString<Value> = Value extends string ? true : false
declare var isString: Test<string>;
export default isString;
