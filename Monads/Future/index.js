var future = (constructor, current) => {
  var fulfilled = [];
  var rejected  = [];
  var is        = false;
  var pending   = (resolve, reject) => {
    if (resolve) fulfilled.push(resolve);
    if (reject)  rejected.push(reject);
    is || (is = true, constructor(
      (value) => {
        current = value;
        rejected.splice(0);
        fulfilled.forEach(call => call(value));
        fulfilled.splice(0);
        is = false;
        pending();
      },

      (value) => {
        fulfilled.splice(0);
        rejected.forEach(call => call(value));
        rejected.splice(0);
        is = false;
        pending();
      }
    ))
  };

  return (resolve, reject) => {
    pending(resolve, reject);
    return future(
      pending,
      (current && resolve ? resolve(current) : current),
    );
  }
};

export default future;
