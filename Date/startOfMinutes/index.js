export default (date) => (date = new Date(date), new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0));
