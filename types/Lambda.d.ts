type Lambda<
  Return extends any = any,
  Value  extends any = any,
> = (value: Value) => Return;

export default Lambda;
