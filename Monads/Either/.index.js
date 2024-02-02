// import nothing from "../Nothing/index.js";

// var tryCatch = (value, right, left) => (call) => {
  //   try {
    //     return right(call(value));
    //   } catch (error) {
      //     return left(error);
      //   }
  // };

// var left = (value) => {
  //   var exec = tryCatch(value, left, right);
  //   var next = (_, call) => call ? exec(call) : next;
  //   return next;
  // };

// var right = (value) => {
  //   var exec = tryCatch(value, right, left);
  //   var next = (call) => call ? exec(call) : next;
  //   return next;
  // };

// var either = Object.setPrototypeOf((call) => (value) => (call(value) ? right(value) : left(value)), {
  //   left     : left,
  //   right    : right,
  //   liftLeft : (call, is) => (call(nothing, (value) => is = value), is),
  //   mapLeft  : (value)    => (call) => call(null, value),
  //   map      : (value)    => (call) => call(value),
  // });

// export default either;
