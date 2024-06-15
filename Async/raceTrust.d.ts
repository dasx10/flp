import type { Either } from "../Monad/either";
import type { Right }  from "../Monad/right";
export default function raceTrust<Values extends readonly Right<any>[]>(values: Values): Right<boolean>;
export default function raceTrust<Values extends (PromiseLike<any>)[]>(values: Values): Either<boolean, unknown>;
