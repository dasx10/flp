import type Lambda  from "../../types/Lambda";
import type AddExec from "./Exec";

interface AsyncAdd extends Promise<Lambda<AddExec<number>, number>> {
  call: <Next extends number>(next: Next | Promise<Next>) => Promise<AddExec<Next>>;
}

export default AsyncAdd;
