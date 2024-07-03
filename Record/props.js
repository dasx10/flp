export default(x)=>new Function("x","return"+"["+x.reduce((y,z)=>y+"x"+"["+'"'+z+'"'+"]"+",","")+"]");
