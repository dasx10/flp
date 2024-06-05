import type { Either } from "./either";
import type { PromiseExecutor } from "./promise";
export default function visitor<Resolved, Rejected>(exec: PromiseExecutor<Resolved, Rejected>): Either<Resolved, Rejected>;
