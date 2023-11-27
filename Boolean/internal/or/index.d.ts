declare const _or: {
  (value: false,   next: false)   : false;
  (value: false,   next: true)    : true;
  (value: true,    next: boolean) : true;
  (value: boolean, next: true)    : true;
  (value: boolean, next: boolean) : boolean;
}

export default _or;
