export default function clump<Min extends number>(min : Min): <Max extends number>(max: Max) => <X extends number>(x: X) => Min | Max | X;
