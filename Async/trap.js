import { right } from"../Monad/either.js";
import done from "./done.js";

export default (y)=>{
  var pending=new Map;
  return right((x) => pending.get(x) || done(() => pending.delete(x))(pending.set(x, right(y(x))).get(x)));
};
