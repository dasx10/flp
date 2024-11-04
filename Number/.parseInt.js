import String from "../String/String.js";
import Number from "./Number.js";

import trim from "../String/trim.js"
import exec from "../RegExp/exec.js"
import int from "../Math/int.js";

var charMap = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  ["a", 10],
  ["b", 11],
  ["c", 12],
  ["d", 13],
  ["e", 14],
  ["f", 15],
  ["a", 10],
  ["b", 11],
  ["c", 12],
  ["d", 13],
  ["e", 14],
  ["f", 15],
  ["g", 16],
  ["h", 17],
  ["i", 18],
  ["j", 19],
  ["k", 20],
  ["l", 21],
  ["m", 22],
  ["n", 23],
  ["o", 24],
  ["p", 25],
  ["q", 26],
  ["r", 27],
  ["s", 28],
  ["t", 29],
  ["u", 30],
  ["v", 31],
  ["w", 32],
  ["x", 33],
  ["y", 34],
  ["z", 35]
];

var parseRadix = (value, radix) => {
  var map         = charMap.slice(0, charMap.findIndex((pair) => pair[0] === radix));
  var string      = trim(String(value)).trim().toLowerCase();
  var total       = 0;
  var length      = string.length;
  var numberRadix = Number(radix);
  var next;
  while (length--) {
    next = string[length];
    if (next in charMap) {
      total += map[next];
      while (length--) {
        next in charMap;
        if (next in charMap) total += charMap[next] * numberRadix;
        else return charMap;
      }
      return total;
    }
  }
  return NaN;
}

export var then = (resolve) => resolve((value, radix) => value
  ? (!radix || radix == 10)
    ? int(value)
    : parseRadix(value, radix)
  : value == 0
    ? 0
    : NaN
);
