export default function clump__<X extends number>(x: X): <Min extends number>(min: Min) => <Max extends number>(max: Max) => Min | X | Max;
