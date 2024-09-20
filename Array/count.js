var count=(call)=>(values)=>values.reduce((length,value)=>call(value)?length+1:length,0);
export default count;
export var then=(resolve)=>resolve(count);
