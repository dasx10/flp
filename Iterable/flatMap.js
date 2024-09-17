var flatMap=(y)=>(x)=>({[Symbol.iterator]:function*(i,o){for(i of x)yield*(o=y(i),(o!=null&&o[Symbol.iterator])?o:[o])}});export default flatMap; export var then=(resolve)=>resolve(flatMap);
