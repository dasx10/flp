import type { Either } from "./either";
import type { PromiseExecutor, PromiseResolver } from "./promise";
import type { Right } from "./right";
export default function viewer<Resolved, Rejected>(exec: PromiseExecutor<Resolved, Rejected>): Either<Resolved, Rejected>;
export default function viewer<Resolved>(exec: PromiseResolver<Resolved>): Right<Resolved>;
