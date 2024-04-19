export default function inc(x: 1): 2;
export default function inc(x: 0): 1;
export default function inc(x: -1): 0;
export default function inc<X extends number>(x: X): Exclude<number, X>;
export default function inc<Y extends number, X extends Exclude<number, Y>>(x: Exclude<X, Y>): Exclude<Y, X>;
