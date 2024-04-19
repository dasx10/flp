export default function isNumber(x: number): true;
export default function isNumber<X>(x: X): x is X & number;
