var props=(x)=>new Function("x","return"+"["+x.reduce((y,z)=>y+"x"+"["+'"'+z+'"'+"]"+",","")+"]");export default props;export var then=(resolve)=>resolve(props);
