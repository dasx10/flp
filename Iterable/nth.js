var _nth=(x,i)=>{var y=i,o=x[Symbol.iterator](),z=o.next();while(y){if((z=o.next()).done)return;y--}return z.value};
var nth=(i)=>(i>=0)?(x)=>((x.at&&x.at.constructor===Function)?x.at(i):(x.nth&&x.nth.constructor===Function)?x.nth(i):_nth(x,i)):()=>void 0;
export default nth;export var then=(resolve)=>resolve(nth);
