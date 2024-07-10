export default function clump<Min extends number>(min : Min): {
  <Max extends number>(max: Max): {
    <X extends number>(x: X): number;
    (x: number): number;
  };

  (max: number): {
    <X extends number>(x: X): number;
    (x: number): number;
  };
};

export default function clump(min: number): {
  <Max extends number>(max: Max): {
    <X extends number>(x: X): number;
    (x: number): number;
  };

  (max: number): {
    <X extends number>(x: X): number;
    (x: number): number;
  };
};
