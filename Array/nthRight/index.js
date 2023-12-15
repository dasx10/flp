import add from "../../Number/internal/add";
export default (index) => (values) => (values[add((values.length), (~index))]);
