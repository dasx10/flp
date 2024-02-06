export default (date) => (date = new Date(date), new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0));
