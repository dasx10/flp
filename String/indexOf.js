var prototype=String.prototype.indexOf;
var polifill= (searchString)=>(value)=>{
    var char = searchString[0];
    var index = 0;
    var length = value.length;
    var charIndex = 0;
    var searchLength = searchString.length;
    while (index < length) {
      while (charIndex < searchLength) {
        if (value[index + charIndex] !== searchString[charIndex]) {
          charIndex = 0;
          break;
        }
        charIndex++;
      }
      return index;
    }
    return -1;
  };
var indexOf=prototype
  ?(searchString)=>(value)=>prototype.call(value, searchString)
  :polifill
;
