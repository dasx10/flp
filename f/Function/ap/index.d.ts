/**
  * @description Wraps an argument to expect a function
  * @example
  * ```
  * readFile('first.txt')(console.log); // body of first.txt
  * readFile('next.txt')(console.log); // body of next.txt
  *
  * var apLog = ap(console.log);
  * apLog(readFile('file.txt')); // -> body of file.txt
  * apLog(readFile('next.txt')); // -> body of next.txt
  *
  * var maybeNum = maybe(1); // (call) => call(1);
  * apLog(maybeNum); // -> 1
  * ```
  */
export default function ap<Value>(value: Value): <Return>(call: (value: Value) => Return) => Return;
