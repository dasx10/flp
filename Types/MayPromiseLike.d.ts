type MayPromiseLike<X> = Awaited<X> | PromiseLike<Awaited<X>>;
export default MayPromiseLike;
