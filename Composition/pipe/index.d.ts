import Constanta from "../../types/Constanta";
import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

type Pipe2<Return, A, B> =
  readonly [Lambda<A, B>, Lambda<Return, A>]

type Pipe3<Return, A, B, C> =
  readonly [Lambda<B, C>, ...Pipe2<Return, A, B>]

type Pipe4<Return, A, B, C, D> =
  readonly [Lambda<C, D>, ...Pipe3<Return, A, B, C>]

type Pipe5<Return, A, B, C, D, E> =
  readonly [Lambda<D, E>, ...Pipe4<Return, A, B, C, D>]

type Pipe6<Return, A, B, C, D, E, F> =
  readonly [Lambda<E, F>, ...Pipe5<Return, A, B, C, D, E>]

type Pipe7<Return, A, B, C, D, E, F, G> =
  readonly [Lambda<F, G>, ...Pipe6<Return, A, B, C, D, E, F>]

type Pipe8<Return, A, B, C, D, E, F, G, H> =
  readonly [Lambda<G, H>, ...Pipe7<Return, A, B, C, D, E, F, G>]

type Pipe9<Return, A, B, C, D, E, F, G, H, I> =
  readonly [Lambda<H, I>, ...Pipe8<Return, A, B, C, D, E, F, G, H>]

type Pipe10<Return, A, B, C, D, E, F, G, H, I, J> =
  readonly [Lambda<I, J>, ...Pipe9<Return, A, B, C, D, E, F, G, H, I>]

type Pipe11<Return, A, B, C, D, E, F, G, H, I, J, K> =
  readonly [Lambda<J, K>, ...Pipe10<Return, A, B, C, D, E, F, G, H, I, J>]

type Pipe12<Return, A, B, C, D, E, F, G, H, I, J, K, L> =
  readonly [Lambda<K, L>, ...Pipe11<Return, A, B, C, D, E, F, G, H, I, J, K>]

type Pipe13<Return, A, B, C, D, E, F, G, H, I, J, K, L, M> =
  readonly [Lambda<L, M>, ...Pipe12<Return, A, B, C, D, E, F, G, H, I, J, K, L>]

type Pipe14<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N> =
  readonly [Lambda<M, N>, ...Pipe13<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>]

type Pipe15<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> =
  readonly [Lambda<N, O>, ...Pipe14<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>]

type Pipe16<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> =
  readonly [Lambda<O, P>, ...Pipe15<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>]

type Pipe17<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> =
  readonly [Lambda<P, Q>, ...Pipe16<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>]

type Pipe18<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> =
  readonly [Lambda<Q, R>, ...Pipe17<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>]

type Pipe19<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> =
  readonly [Lambda<R, S>, ...Pipe18<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>]

type Pipe20<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T> =
  readonly [Lambda<S, T>, ...Pipe19<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>]

type Pipe21<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U> =
  readonly [Lambda<T, U>, ...Pipe20<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>]

type Pipe22<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V> =
  readonly [Lambda<U, V>, ...Pipe21<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>]

type Pipe23<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W> =
  readonly [Lambda<V, W>, ...Pipe22<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>]

type Pipe24<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X> =
  readonly [Lambda<W, X>, ...Pipe23<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>]

type Pipe25<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y> =
  readonly [Lambda<X, Y>, ...Pipe24<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>]

type Pipe26<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z> =
  readonly [Lambda<Y, Z>, ...Pipe25<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>]

type Pipe_2<Return, A> =
  readonly [Constanta<A>, Lambda<Return, A>];

type Pipe_3<Return, A, B> =
  readonly [Constanta<B>, ...Pipe2<Return, A, B>];

type Pipe_4<Return, A, B, C> =
  readonly [Constanta<C>, ...Pipe3<Return, A, B, C>];

type Pipe_5<Return, A, B, C, D> =
  readonly [Constanta<D>, ...Pipe4<Return, A, B, C, D>];

type Pipe_6<Return, A, B, C, D, E> =
  readonly [Constanta<E>, ...Pipe5<Return, A, B, C, D, E>];

type Pipe_7<Return, A, B, C, D, E, F> =
  readonly [Constanta<F>, ...Pipe6<Return, A, B, C, D, E, F>];

type Pipe_8<Return, A, B, C, D, E, F, G> =
  readonly [Constanta<G>, ...Pipe7<Return, A, B, C, D, E, F, G>];

type Pipe_9<Return, A, B, C, D, E, F, G, H> =
  readonly [Constanta<H>, ...Pipe8<Return, A, B, C, D, E, F, G, H>];

type Pipe_10<Return, A, B, C, D, E, F, G, H, I> =
  readonly [Constanta<I>, ...Pipe9<Return, A, B, C, D, E, F, G, H, I>];

type Pipe_11<Return, A, B, C, D, E, F, G, H, I, J> =
  readonly [Constanta<J>, ...Pipe10<Return, A, B, C, D, E, F, G, H, I, J>];

type Pipe_12<Return, A, B, C, D, E, F, G, H, I, J, K> =
  readonly [Constanta<K>, ...Pipe11<Return, A, B, C, D, E, F, G, H, I, J, K>];

type Pipe_13<Return, A, B, C, D, E, F, G, H, I, J, K, L> =
  readonly [Constanta<L>, ...Pipe12<Return, A, B, C, D, E, F, G, H, I, J, K, L>];

type Pipe_14<Return, A, B, C, D, E, F, G, H, I, J, K, L, M> =
  readonly [Constanta<M>, ...Pipe13<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>];

type Pipe_15<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N> =
  readonly [Constanta<N>, ...Pipe14<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>];

type Pipe_16<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O> =
  readonly [Constanta<O>, ...Pipe15<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>];

type Pipe_17<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P> =
  readonly [Constanta<P>, ...Pipe16<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>];

type Pipe_18<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q> =
  readonly [Constanta<Q>, ...Pipe17<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>];

type Pipe_19<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R> =
  readonly [Constanta<R>, ...Pipe18<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>];

type Pipe_20<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S> =
  readonly [Constanta<S>, ...Pipe19<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>];

type Pipe_21<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T> =
  readonly [Constanta<T>, ...Pipe20<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>];

type Pipe_22<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U> =
  readonly [Constanta<U>, ...Pipe21<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>];

type Pipe_23<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V> =
  readonly [Constanta<V>, ...Pipe22<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>];

type Pipe_24<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W> =
  readonly [Constanta<W>, ...Pipe23<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>];

type Pipe_25<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X> =
  readonly [Constanta<X>, ...Pipe24<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>];

type Pipe_26<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y> =
  readonly [Constanta<Y>, ...Pipe25<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>];

type Pipe_27<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z> =
  readonly [Constanta<Z>, ...Pipe26<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>];




export default function pipe<Return, A, B, C, D>
  (values: Pipe_5<Return, A, B, C, D>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E>
  (values: Pipe_6<Return, A, B, C, D, E>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F>
  (values: Pipe_7<Return, A, B, C, D, E, F>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G>
  (values: Pipe_8<Return, A, B, C, D, E, F, G>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H>
  (values: Pipe_9<Return, A, B, C, D, E, F, G, H>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I>
  (values: Pipe_10<Return, A, B, C, D, E, F, G, H, I>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J>
  (values: Pipe_11<Return, A, B, C, D, E, F, G, H, I, J>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K>
  (values: Pipe_12<Return, A, B, C, D, E, F, G, H, I, J, K>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L>
  (values: Pipe_13<Return, A, B, C, D, E, F, G, H, I, J, K, L>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>
  (values: Pipe_14<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
  (values: Pipe_15<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
  (values: Pipe_16<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
  (values: Pipe_17<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
  (values: Pipe_18<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
  (values: Pipe_19<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
  (values: Pipe_20<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>
  (values: Pipe_21<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>
  (values: Pipe_22<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>
  (values: Pipe_23<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>
  (values: Pipe_24<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>
  (values: Pipe_25<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>
  (values: Pipe_26<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>):
  Constanta<Return>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>
  (values: Pipe_27<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>):
  Constanta<Return>
;

export default function pipe<Return, A>
  (values: Pipe_2<Return, A>):
  Constanta<Return>
;
export default function pipe<Return, A, B>
  (values: Pipe2<Return, A, B>):
  Lambda<Return, B>
;

export default function pipe<Return, A, B>
  (values: Pipe_3<Return, A, B>):
  Constanta<Return>
;
export default function pipe<Return, A, B, C>
  (values: Pipe3<Return, A, B, C>):
  Lambda<Return, C>
;

export default function pipe<Return, A, B, C>
  (values: Pipe_4<Return, A, B, C>):
  Constanta<Return>
;
export default function pipe<Return, A, B, C, D>
  (values: Pipe4<Return, A, B, C, D>):
  Lambda<Return, D>
;

export default function pipe<Return, A, B, C, D, E>
  (values: Pipe5<Return, A, B, C, D, E>):
  Lambda<Return, E>
;

export default function pipe<Return, A, B, C, D, E, F>
  (values: Pipe6<Return, A, B, C, D, E, F>):
  Lambda<Return, F>
;

export default function pipe<Return, A, B, C, D, E, F, G>
  (values: Pipe7<Return, A, B, C, D, E, F, G>):
  Lambda<Return, G>
;

export default function pipe<Return, A, B, C, D, E, F, G, H>
  (values: Pipe8<Return, A, B, C, D, E, F, G, H>):
  Lambda<Return, H>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I>
  (values: Pipe9<Return, A, B, C, D, E, F, G, H, I>):
  Lambda<Return, I>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J>
  (values: Pipe10<Return, A, B, C, D, E, F, G, H, I, J>):
  Lambda<Return, J>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K>
  (values: Pipe11<Return, A, B, C, D, E, F, G, H, I, J, K>):
  Lambda<Return, K>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L>
  (values: Pipe12<Return, A, B, C, D, E, F, G, H, I, J, K, L>):
  Lambda<Return, L>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>
  (values: Pipe13<Return, A, B, C, D, E, F, G, H, I, J, K, L, M>):
  Lambda<Return, M>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>
  (values: Pipe14<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N>):
  Lambda<Return, N>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>
  (values: Pipe15<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>):
  Lambda<Return, O>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>
  (values: Pipe16<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>):
  Lambda<Return, P>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>
  (values: Pipe17<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>):
  Lambda<Return, Q>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>
  (values: Pipe18<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>):
  Lambda<Return, R>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>
  (values: Pipe19<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>):
  Lambda<Return, S>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>
  (values: Pipe20<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>):
  Lambda<Return, T>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>
  (values: Pipe21<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>):
  Lambda<Return, U>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>
  (values: Pipe22<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>):
  Lambda<Return, V>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>
  (values: Pipe23<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>):
  Lambda<Return, W>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>
  (values: Pipe24<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>):
  Lambda<Return, X>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>
  (values: Pipe25<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>):
  Lambda<Return, Y>
;

export default function pipe<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>
  (values: Pipe26<Return, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>):
  Lambda<Return, Z>
;

// export default function pipe<Values extends readonly Lambda<any, any>[]>(values: Values): (value: Values extends readonly [(value: infer Value) => any, ...any[]] ? Value : unknown) => Values extends readonly [...any[], (any) => infer Return]
//   ? Return
//   : Values[number] | Constanta
//   ;
