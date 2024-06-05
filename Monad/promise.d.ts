import type { Either } from "./either";
import type { Right } from "./right";
export type PromiseExecutor<Resolved, Rejected> = (resolve: (x: Resolved) => any, reject: (x: Rejected) => any) => any;
export type PromiseResolver<Resolved> = (resolve: (x: Resolved) => any) => any;

export default function promise<Resolved, Rejected>(exec: PromiseExecutor<Resolved, Rejected>): Either<Resolved, Rejected>;
export default function promise<Resolved>(exec: PromiseResolver<Resolved>): Right<Resolved>;
