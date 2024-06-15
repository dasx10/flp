import type { Either } from "../Monad/either";
import {Right} from "../Monad/right";
// export default function asSome<Values extends (PromiseLike<any>)[]>(values: Values): Right<boolean>;
export default function asSome<Values extends (PromiseLike<any>)[]>(values: Values): Either<boolean, unknown>;
