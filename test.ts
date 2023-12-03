import namespace from ".";
import "./Polyfill";

// namespace.Number.zero.call().apply(
//   namespace.Number.add.call(0)
// ).apply(namespace.Number.add.call(0))

// namespace
//   .Number
//   .add
//   .call(Promise.resolve(1))
//   .call(2)
//   .then(value => value)

// namespace
//   .Number
//   .one
//   .call()
//   .apply(namespace.Number.add)
//   .call(1)
//   .apply(Promise.resolve((x) => "" + x))
//   .then(value => value)

//   // Promise.resolve(1).call(2)

// var test = (next: string) => (value: number) => next + value;

// namespace
//   .Array
//   .reduce
//   .call(test)
//   .call("dsa")
//   .call([1, 2, 3])
//   .then((value) => value)

// var strL = (value: string) => value.length;
// namespace.Array.mapRight
// .call(strL)
// .call(["dsa"] as const)
// .then((value) => value)

// //   import reduce from "./Array/reduce";
// import map from "./Array/map";

// var lengths = map(strL);
// var a = lengths(["dsa"])


// var c = reduce(test)("1")([1, 2, 3])
//
