export default function _drop<
  Values extends readonly any[],
  Min    extends number,
  Max    extends number,
>(
  values : Values,
  min    : Min,
  max    : Max
): Values[number][];
