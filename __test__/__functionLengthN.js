import __function from "./__function.js";
import __lengthN  from "./__lengthN.js";

export default (length) => {
 const mustBeCurrentLengthTest = __lengthN(length);

  return (call) => {
    __function(call);
    mustBeCurrentLengthTest(call);
    return call;
  };
};
