import then from"./.then.js";import right from"./right.js";export default(x)=>then((resolve)=>right(x())(resolve));
