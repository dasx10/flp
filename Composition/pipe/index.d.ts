import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

type PipeList<Values extends readonly any[]> = Values extends readonly [infer First, infer Next, ...infer Rest]
  ? [(value: First) => Next, ...PipeList<[Next, ...Rest]>]
  : [];

type Last <Values extends readonly Lambda<any, any>[]> = Values extends readonly [...Lambda<any, any>, infer Last]
  ? Last
  : Values[number];

type First <Values extends readonly Lambda<any, any>[]> = Values extends readonly [infer First, ...Lambda<any, any>]
  ? First
  : Values[0];

type Pipe1<A, B, C>
  = readonly [Lambda<A, B>, Lambda<B, C>];
type Pipe2<A, B, C, D>
  = readonly [Lambda<A, B>, Lambda<B, C>];
type Pipe3<A, B, C, D, E>
  = readonly [Lambda<A, B>, ...Pipe2<B, C, D>];
type Pipe4<A, B, C, D, E, F>
  = readonly [Lambda<A, B>, ...Pipe3<B, C, D, F>];
type Pipe5<A, B, C, D, E, F, G>
  = readonly [Lambda<A, B>, ...Pipe4<B, C, D, F, G>];
type Pipe6<A, B, C, D, E, F, G, H>
  = readonly [Lambda<A, B>, ...Pipe5<B, C, D, F, G, H>];
type Pipe7<A, B, C, D, E, F, G, H, I>
  = readonly [Lambda<A, B>, ...Pipe6<B, C, D, F, G, H, I>];
type Pipe8<A, B, C, D, E, F, G, H, I, J>
  = readonly [Lambda<A, B>, ...Pipe7<B, C, D, F, G, H, I, J>];
type Pipe9<A, B, C, D, E, F, G, H, I, J, K>
  = readonly [Lambda<A, B>, ...Pipe8<B, C, D, F, G, H, I, J, K>];
type Pipe10<A, B, C, D, E, F, G, H, I, J, K, L>
  = readonly [Lambda<A, B>, ...Pipe9<B, C, D, F, G, H, I, J, K, L>];
type Pipe11<A, B, C, D, E, F, G, H, I, J, K, L, M>
  = readonly [Lambda<A, B>, ...Pipe10<B, C, D, F, G, H, I, J, K, L, M>];
type Pipe12<A, B, C, D, E, F, G, H, I, J, K, L, M, N>
  = readonly [Lambda<A, B>, ...Pipe11<B, C, D, F, G, H, I, J, K, L, M, N>];
type Pipe13<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
  = readonly [Lambda<A, B>, ...Pipe12<B, C, D, F, G, H, I, J, K, L, M, N, O>];
type Pipe14<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
  = readonly [Lambda<A, B>, ...Pipe13<B, C, D, F, G, H, I, J, K, L, M, N, O, P>];
type Pipe15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
  = readonly [Lambda<A, B>, ...Pipe14<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q>];
type Pipe16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
  = readonly [Lambda<A, B>, ...Pipe15<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R>];
type Pipe17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
  = readonly [Lambda<A, B>, ...Pipe16<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>];
type Pipe18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>
  = readonly [Lambda<A, B>, ...Pipe17<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>];
type Pipe19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>
  = readonly [Lambda<A, B>, ...Pipe18<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>];
type Pipe20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>
  = readonly [Lambda<A, B>, ...Pipe19<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>];
type Pipe21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>
  = readonly [Lambda<A, B>, ...Pipe20<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>];
type Pipe22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>
  = readonly [Lambda<A, B>, ...Pipe21<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>];
type Pipe23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>
  = readonly [Lambda<A, B>, ...Pipe22<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>];
type Pipe24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>
  = readonly [Lambda<A, B>, ...Pipe23<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>];

export default function pipe
  <A, B, C>
  (values: Pipe1<A, B, C>)
  : Lambda<A, C>;

export default function pipe
  <A, B, C, D>
  (values: Pipe2<A, B, C, D>)
  : Lambda<A, D>;

export default function pipe
  <A, B, C, D, E>
  (values: Pipe3<A, B, C, D, E>)
  : Lambda<A, E>;

export default function pipe
  <A, B, C, D, E, F>
  (values: Pipe4<A, B, C, D, E, F>)
  : Lambda<A, F>;

export default function pipe
  <A, B, C, D, E, F, G>
  (values: Pipe5<A, B, C, D, E, F, G>)
  : Lambda<A, G>

export default function pipe
  <A, B, C, D, E, F, G, H>
  (values: Pipe6<A, B, C, D, E, F, G, H>)
  : Lambda<A, H>

export default function pipe
  <A, B, C, D, E, F, G, H, I>
  (values: Pipe7<A, B, C, D, E, F, G, H, I>)
  : Lambda<A, I>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J>
  (values: Pipe8<A, B, C, D, E, F, G, H, I, J>)
  : Lambda<A, J>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K>
  (values: Pipe9<A, B, C, D, E, F, G, H, I, J, K>)
  : Lambda<A, K>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L>
  (values: Pipe10<A, B, C, D, E, F, G, H, I, J, K, L>)
  : Lambda<A, L>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M>
  (values: Pipe11<A, B, C, D, E, F, G, H, I, J, K, L, M>)
  : Lambda<A, M>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>
  (values: Pipe12<A, B, C, D, E, F, G, H, I, J, K, L, M, N>)
  : Lambda<A, N>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
  (values: Pipe13<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>)
  : Lambda<A, O>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
  (values: Pipe14<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>)
  : Lambda<A, P>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
  (values: Pipe15<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>)
  : Lambda<A, Q>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
  (values: Pipe16<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>)
  : Lambda<A, R>

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
  (values: Pipe17<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>)
  : Lambda<A, S>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>
  (values: Pipe18<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>)
  : Lambda<A, T>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>
  (values: Pipe19<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>)
  : Lambda<A, U>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>
  (values: Pipe20<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>)
  : Lambda<A, V>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>
  (values: Pipe21<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>)
  : Lambda<A, W>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>
  (values: Pipe22<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>)
  : Lambda<A, X>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>
  (values: Pipe23<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>)
  : Lambda<A, Y>;

export default function pipe
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>
  (values: Pipe24<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>)
  : Lambda<A, Z>;
