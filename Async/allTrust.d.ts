import type { Either } from "../Monad/either";
import type { Right }  from "../Monad/right";
export default function allTrust<Values extends readonly Right<any>[]>(values: Values): Right<boolean>;
export default function allTrust<Values extends (PromiseLike<any>)[]>(values: Values): Either<boolean, unknown>;
