/**
  * @example
  * readFile('first.txt')(console.log); // body of first.txt
  * readFile('next.txt')(console.log); // body of next.txt
  *
  * var logCallback = ap(console.log);
  * logCallback(readFile('file.txt')); // body of file.txt
  * logCallback(readFile('next.txt')); // body of next.txt
  */
export default function ap<Value>(value: Value): <Return>(call: (value: Value) => Return) => Return;
