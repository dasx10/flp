var promiseCatch=(y)=>(x)=>Promise.resolve(x).catch(y);
export default promiseCatch;
export var then=promiseCatch;
