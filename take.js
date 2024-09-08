var take=(y)=>(x)=>({[Symbol.iterator]:function*(){var i=y,o=x[Symbol.iterator](),z=o.next();while(i>0&&!z.done)yield z.value,i--,z=o.next();return o}});
export default take;export var then=(resolve)=>resolve(take);
