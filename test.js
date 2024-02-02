import y, { async } from './index.js';

var log    = async((value) => ((console.log(value)), value))


var pipe   = y("Composition/pipeAsync");
var inc    = y("Number/inc");
var reduce = y("Array/reduce");
var add    = y("Number/add");
var sub    = y("Number/sub");
var map    = y("Array/map");


var sumOf     = reduce(add);
var sum       = sumOf(0);
var sumRes    = sum(Array.from({ length: 65534 }, (_, index) => add(index)(index)));
var addSumRes = add(sumRes);
var nextRes   = inc(addSumRes(10));

var incs = (map)(inc);

log(incs([1, 2, 3]))

log(nextRes);


var sub2 = sub(2);

var test = pipe([
  sub2,
  inc,
]);

var result = test(10);
async(console.log)(result);

// log(test(Promise.resolve(11)));

// log(sub2(10))
// log(sumRes(sub2));



// log(map === y("Array/map"));

// var strings = map(String);
// log(strings([1, 2, 3, 4]))
// log(sum);


// const log = sync((value) => (console.log(value), value));

// // var add__ = (y) => (x) => x + y;

// const inc    = y(("Number/inc"));
// log(inc(inc(sync(2))))

// // const add    = y("Number/add");
// // const pipe   = load("Composition/pipe");

// const pipe = sync(_pipe);
// // const add  = sync(_add);


// // log(add(sync(3))(sync(3)))

// var add1  = add(sync(1));
// var add2  = add(sync(2));
// var three = sync(3);

// log(inc(add2(add1(three))));

// const add3 = _pipe([
  //   inc,
  //   inc,
  //   inc,
  // ]);


// log(inc(add1(three)));

// const getElementById = async((id) => (html) => html.match(new RegExp(`<(\\w+ )+id=.${id}[^>]+`))[0]);

// const page = (y.get("http://127.0.0.1:3000"));

// const str = async(String);
// log(getElementById("root")(page));


// log(add3(three));

// var add3 = pipe(y.list(
  // add(y.sync(1)),
  // add(y.sync(2)),
  // add(y.sync(2)),
  // ));


// log(add3(y.sync(3)));
