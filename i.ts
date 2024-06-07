import {left, right} from "./Monad/either";
import promise from "./Monad/promise";

var aa = right<33>(33);
var r = left(333)

var aab = promise(r);
