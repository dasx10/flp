export default function join<
  Value extends string,
  Next  extends string = "",
  Join  extends string = "",
>(value: Value, next: Next, join: Join): `${Value}${Join}${Next}`;
