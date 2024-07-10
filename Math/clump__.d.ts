export default function clump__<X extends number>(x: X): {
  <Min extends number>(min: Min): {
    <Max extends number>(max: Max): Min | number | Max;
    (max: number): number;
  }

  (min: number): {
    <Max extends number>(max: Max): number;
    (max: number): number;
  }
};

export default function clump__(x: number): {
  <Min extends number>(min: Min): {
    <Max extends number>(max: Max): Min | number | Max;
    (max: number): number;
  }

  (min: number): {
    <Max extends number>(max: Max): number;
    (max: number): number;
  }
};
