import type ArrayFiltered from "./ArrayFiltered";
type ArrayFound<Values> = ArrayFiltered<Values>[number] | undefined;
export default ArrayFound;
