import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

type Last <Values extends readonly any[]> = Values extends readonly [...any, infer Last]
  ? Last
  : Values[number];

type First <Values extends readonly any[]> = Values extends readonly [infer First, ...any]
  ? First
  : Values[0] | Values[number];

type Compose2<A, B, C>
  = readonly [Lambda<B, C>, Lambda<A, B>];
type Compose3<A, B, C, D>
  = readonly [...Compose2<B, C, D>, Lambda<A, B>];
type Compose4<A, B, C, D, F>
  = readonly [...Compose3<B, C, D, F>, Lambda<A, B>];
type Compose5<A, B, C, D, F, G>
  = readonly [...Compose4<B, C, D, F, G>, Lambda<A, B>];
type Compose6<A, B, C, D, F, G, H>
  = readonly [...Compose5<B, C, D, F, G, H>, Lambda<A, B>];
type Compose7<A, B, C, D, F, G, H, I>
  = readonly [...Compose6<B, C, D, F, G, H, I>, Lambda<A, B>];
type Compose8<A, B, C, D, F, G, H, I, J>
  = readonly [...Compose7<B, C, D, F, G, H, I, J>, Lambda<A, B>];
type Compose9<A, B, C, D, F, G, H, I, J, K>
  = readonly [...Compose8<B, C, D, F, G, H, I, J, K>, Lambda<A, B>];
type Compose10<A, B, C, D, F, G, H, I, J, K, L>
  = readonly [...Compose9<B, C, D, F, G, H, I, J, K, L>, Lambda<A, B>];
type Compose11<A, B, C, D, F, G, H, I, J, K, L, M>
  = readonly [...Compose10<B, C, D, F, G, H, I, J, K, L, M>, Lambda<A, B>];
type Compose12<A, B, C, D, F, G, H, I, J, K, L, M, N>
  = readonly [...Compose11<B, C, D, F, G, H, I, J, K, L, M, N>, Lambda<A, B>];
type Compose13<A, B, C, D, F, G, H, I, J, K, L, M, N, O>
  = readonly [...Compose12<B, C, D, F, G, H, I, J, K, L, M, N, O>, Lambda<A, B>];
type Compose14<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P>
  = readonly [...Compose13<B, C, D, F, G, H, I, J, K, L, M, N, O, P>, Lambda<A, B>];
type Compose15<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q>
  = readonly [...Compose14<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q>, Lambda<A, B>];
type Compose16<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R>
  = readonly [...Compose15<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R>, Lambda<A, B>];
type Compose17<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
  = readonly [...Compose16<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>, Lambda<A, B>];
type Compose18<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>
  = readonly [...Compose17<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>, Lambda<A, B>];
type Compose19<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>
  = readonly [...Compose18<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>, Lambda<A, B>];
type Compose20<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>
  = readonly [...Compose19<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>, Lambda<A, B>];
type Compose21<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>
  = readonly [...Compose20<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>, Lambda<A, B>];
type Compose22<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>
  = readonly [...Compose21<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>, Lambda<A, B>];
type Compose23<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>
  = readonly [...Compose22<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>, Lambda<A, B>];
type Compose24<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>
  = readonly [...Compose23<B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>, Lambda<A, B>];


declare var compose: {
  <A, B, C>
    (values: Compose2<A, B, C>)
  : (value: A) => C;
  <A, B, C, D>
    (values: Compose3<A, B, C, D>)
  : (value: A) => D;
  <A, B, C, D, F>
    (values: Compose4<A, B, C, D, F>)
  : (value: A) => F;
  <A, B, C, D, F, G>
    (values: Compose5<A, B, C, D, F, G>)
  : (value: A) => G;
  <A, B, C, D, F, G, H>
    (values: Compose6<A, B, C, D, F, G, H>)
  : (value: A) => H;
  <A, B, C, D, F, G, H, I>
    (values: Compose7<A, B, C, D, F, G, H, I>)
  : (value: A) => I;
  <A, B, C, D, F, G, H, I, J>
    (values: Compose8<A, B, C, D, F, G, H, I, J>)
  : (value: A) => J;
  <A, B, C, D, F, G, H, I, J, K>
    (values: Compose9<A, B, C, D, F, G, H, I, J, K>)
  : (value: A) => K;
  <A, B, C, D, F, G, H, I, J, K, L>
    (values: Compose10<A, B, C, D, F, G, H, I, J, K, L>)
  : (value: A) => L;
  <A, B, C, D, F, G, H, I, J, K, L, M>
    (values: Compose11<A, B, C, D, F, G, H, I, J, K, L, M>)
  : (value: A) => M;
  <A, B, C, D, F, G, H, I, J, K, L, M, N>
    (values: Compose12<A, B, C, D, F, G, H, I, J, K, L, M, N>)
  : (value: A) => N;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O>
    (values: Compose13<A, B, C, D, F, G, H, I, J, K, L, M, N, O>)
  : (value: A) => O;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P>
    (values: Compose14<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P>)
  : (value: A) => P;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q>
    (values: Compose15<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q>)
  : (value: A) => Q;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R>
    (values: Compose16<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R>)
  : (value: A) => R;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
    (values: Compose17<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>)
  : (value: A) => S;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>
    (values: Compose18<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>)
  : (value: A) => T;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>
    (values: Compose19<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>)
  : (value: A) => U;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>
    (values: Compose20<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>)
  : (value: A) => V;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>
    (values: Compose21<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>)
  : (value: A) => W;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>
    (values: Compose22<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>)
  : (value: A) => X;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>
    (values: Compose23<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>)
  : (value: A) => Y;
  <A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>
    (values: Compose24<A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>)
  : (value: A) => Z;
  <Values extends readonly ((value: any) => any)[]
  >
    (values: Values)
  : (value: Parameter<Last<Values>>) => ReturnType<First<Values>>;
}

export default compose;
