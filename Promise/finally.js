var promiseFinally=(y)=>(x)=>Promise.resolve(x).finally(y);
export default promiseFinally;
export var then=(resolve)=>resolve(promiseFinally);

