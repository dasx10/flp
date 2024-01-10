export default values => value => values.reduce((next, call) => Promise.all([next, call]).then(([value, exec]) => exec(value)), Promise.resolve(value));;
