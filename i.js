import { right, left } from './Monad/either.js';
import all from "./Async/all.js";
import settled from './Monad/settled.js';
import collector from './Async/collector.js';
import promiseCollector from './Async/promiseCollector.js';

collector({
  a: right(1),
  b: right(2),
  c: right(Promise.resolve(3)),
}).then(console.log);
// all([
  //   right(1),
  //   right(2),
  //   right(Promise.reject(33333)),
  //   right(Promise.reject(3333)),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, -6))),
  //   right(3),
  //   right(Promise.resolve(4)),
  //   right(new Promise((resolve) => setTimeout(resolve, 1000, 5))),
  // ])(console.log, console.log);
