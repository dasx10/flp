export default(x)=>Promise.all(Object.values(x)).then((o)=>Object.fromEntries(Object.keys(x).map((key,index)=>[key,o[index]])));
