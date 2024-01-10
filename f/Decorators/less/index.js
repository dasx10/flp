var less = call => {
  var values = new Map();
  return value => {
    var is = values.get(value);
    if (is) {
      var next = call(value)
        .finally(() => (values.set(value, next)));

      return ({
        then    : exec => (is
          .then((valueOf) => {
            var create = exec(valueOf);
            next.then((next) => next !== valueOf && (create = exec(next)))
            return create;
          })
          .catch(() => next.then(exec))
        ),

        catch   : exec => next.catch(exec),
        finally : exec => next.finally(exec),
      });
    }

    values.set(value, is = call(value));
    return is;
  };
};

export default less;
