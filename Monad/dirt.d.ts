import type { ToRight } from "./right";
export default function dirt<Return>(call: () => Return): ToRight<Return>;
