/**
 * Given a function and a number x, return a function that can be called X number of times.
 */

function times(fn, x) {}

const return1 = function () {
  return 1;
};
const return1Twice = times(return1, 2);

console.log("== EXAMPLE 1 OUTPUT ==");
console.log(return1Twice()); // 1
console.log(return1Twice()); // 1
console.log(return1Twice()); // undefined
console.log("======================");

const returnY = function (y) {
  return y;
};
const returnYThrice = times(returnY, 3);

console.log("== EXAMPLE 2 OUTPUT ==");
console.log(returnYThrice(1)); // 1
console.log(returnYThrice(2)); // 2
console.log(returnYThrice(4)); // 4
console.log(returnYThrice(6)); // undefined
console.log("======================");
