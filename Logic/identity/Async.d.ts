import type MayPromise from "../../types/MayPromise";
import type PromiseResult from "../../types/PromiseResult";
type AsyncIdentity = <Value>(value: MayPromise<Value>) => PromiseResult<Value>;
export default AsyncIdentity;
