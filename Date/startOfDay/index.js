export default (date) => (date = new Date(date), new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0));
