function Promisify() {}

const demo = new Promisify((resolve, reject) => {
  // function (resolve, reject)
  setTimeout(function () {
    resolve("Howdy!");
  }, 2000);
});

demo.then(console.log).then(function (val) {
  console.log(`Hello ${val}`); // should print Hello Howdy!
});

// const demoFail = new Promisify((resolve, reject) => {
//   setTimeout(function() {
//     reject("From Demo Fail Function!");
//   }, 1000);
// });

// demoFail
//   .then(val => console.log("DemoFail Then!!"))
//   .catch(console.error) //Should throw an error.
//   .then(val => console.log("Second then!"))
//   .catch(
//   (err) => {
//     throw new Error('Final Error Function', err);
//   })
