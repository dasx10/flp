export default(y)=>(x)=>Promise.all([y,x]).then((z)=>z[0](z[1]));
