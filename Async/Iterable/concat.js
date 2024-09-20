import toArray from "./.toArray.js";

var concat = (y) => (
  (Symbol.iterator in y)
  ? (x) => (
    (Symbol.iterator in x)
      ? ({
        [Symbol.iterator]: function* () {
          yield*x;
          yield*y;
        },
        [Symbol.asyncIterator]: async function* () {
          yield*x;
          yield*y;
        },
        then: toArray,
      })
      : (Symbol.asyncIterator in x)
        ? ({
          [Symbol.asyncIterator]: async function* () {
            yield*x;
            yield*y;
          },
          then: toArray,
        })
        : ({
          [Symbol.asyncIterator]: async function* () {
            yield*await x;
            yield*y;
          },
          then: toArray,
        })
  )

  : (Symbol.asyncIterator in y)
    ? (x) => (
      ((Symbol.iterator in x) || (Symbol.asyncIterator in x)) ? ({
        [Symbol.asyncIterator]: async function* () {
          yield*x;
          yield*y;
        },
        then: toArray,
      })
      : ({
        [Symbol.asyncIterator]: async function* () {
          yield*await x;
          yield*y;
        },
        then: toArray,
      })
    )
    : (x) => (
      ((Symbol.iterator in x) || (Symbol.asyncIterator in x)) ? ({
        [Symbol.asyncIterator]: async function* () {
          yield*x;
          yield*await y;
        },
        then: toArray,
      })
      : ({
        [Symbol.asyncIterator]: async function* () {
          yield*await x;
          yield*await y;
        },
        then: toArray,
      })
    )
);

export default concat;
