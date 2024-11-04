import String from "../String/String.js";
var prototype = String.prototype && String.prototype.split;

var split = (prototype && prototype.constructor === Function && prototype.length === 2 && prototype.name === "split")
  ? (separator) => (string) => prototype.call(string, separator)
  : (separator) => (string) => {
    var create = [];
    var temp = "";
    var matchIndex = 0;
    var length = string.length;
    var index = 0;
    var createIndex = 0;
    while (index < length) {
      if (string[index] === separator[matchIndex]) {
        matchIndex++;
        if (matchIndex === separator.length) {
          create[createIndex++] = temp;
          temp = "";
          matchIndex = 0;
        }
      } else {
        if (matchIndex > 0) for (let j = 0; j < matchIndex; j++) temp += separator[j];
        temp += string[index];
        matchIndex = 0;
      }
      index++;
    }

    create.push(temp);

    return create;
  }
;

export default split;
