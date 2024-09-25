import { Either, Right } from "../Monad/either";

type primitive = string | number | boolean | null | undefined | symbol | bigint;

declare function stringConstructor<X extends primitive>(x: X): Right<`${X}`>;
declare function stringConstructor<X>(x: X): Right<`${X}`>;

declare const string: typeof stringConstructor & {
  readonly lower: Either<typeof import("./lower").default, Error>;
  readonly upper: Either<typeof import("./upper").default, Error>;
};

export default string;
