declare const _xor: {
  (value : true,    next : false)   : true;
  (value : false,   next : true)    : true;
  (value : true,    next : true)    : false;
  (value : false,   next : false)   : false;
  (value : boolean, next : false)   : value is true;
  (value : boolean, next : true)    : value is false;
  (value : true,    next : boolean) : next  is false;
  (value : false,   next : boolean) : next  is true;
  (value : boolean, next : boolean) : boolean;
}

export default _xor;
