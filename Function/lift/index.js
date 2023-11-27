var lift = call => (call(is => (call = is)), call);
export default lift;
