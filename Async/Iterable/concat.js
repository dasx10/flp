var {iterator, asyncIterator} = Symbol;
var concat = (y) => (
  (iterator in y)
  ? (x) => (
    (iterator in x)
      ? ({
        [iterator]: function* () {
          yield*x;
          yield*y;
        },
        [asyncIterator]: async function* () {
          yield*x;
          yield*y;
        },
      })
      : (asyncIterator in x)
        ? ({
          [asyncIterator]: async function* () {
            yield*x;
            yield*y;
          },
        })
        : ({
          [asyncIterator]: async function* () {
            yield*await x;
            yield*y;
          },
        })
  )

  : (asyncIterator in y)
    ? (x) => (
      ((iterator in x) || (asyncIterator in x)) ? ({
        [asyncIterator]: async function* () {
          yield*x;
          yield*y;
        },
      })
      : ({
        [asyncIterator]: async function* () {
          yield*await x;
          yield*y;
        },
      })
    )
    : (x) => (
      ((iterator in x) || (asyncIterator in x)) ? ({
        [asyncIterator]: async function* () {
          yield*x;
          yield*await y;
        },
      })
      : ({
        [asyncIterator]: async function* () {
          yield*await x;
          yield*await y;
        },
      })
    )
);

export default concat;
