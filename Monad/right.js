var thenObject=(x)=>(x.then=x);

var resolver = (resolve) => resolve != null
  ? resolve.then
    ? (value) => resolve.then((resolve) => resolve != null
      ? resolve.constructor === Function
        ? resolve(value)
        : value != null ? value(resolve) : value
      : value
    )
    : resolve.constructor === Function
      ? (value) => resolve(value)
      : (value) => value(resolve)
  : (value) => value
;

var rejecter = (reject) => reject != null
  ? reject.then
    ? (error) => reject.then((reject) => reject != null
      ? reject.constructor === Function
        ? reject(error)
        : error(reject)
      : error
    )
    : reject.constructor === Function
      ? (error) => reject(error)
      : (error) => error(reject)
  : (error) => Promise.reject(error)
;

var asyncRight = (x) => thenObject((resolve, reject) => asyncRight(x.then(resolver(resolve), rejecter(reject))));

var right = (x) => (x != null && x.then)
  ? (x.then === x)
    ? x
    : asyncRight(x)
  : thenObject((resolve) => right(
    (resolve != null)
      ? (resolve.then)
        ? resolve.then((resolve) => (resolve && resolve.constructor === Function)
            ? resolve(x)
            : x(resolve)
          )
        : ((resolve.constructor === Function)
          ? resolve(x)
          : x(resolve)
        )
      : x(resolve)
  ))
;

export default right;
