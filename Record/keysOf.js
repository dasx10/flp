var keysOf=(y)=>(x)=>({[Symbol.iterator]:function*(){var k;for(k in x)if(y===x[k])yield k;}});
