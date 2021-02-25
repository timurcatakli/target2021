function AsyncArray(arr) {
  this._arr = arr;
  this.length = arr.length;
}
AsyncArray.prototype.get = function get(index, callback) {
  setTimeout(callback, 0, this._arr[index]);
};

function asyncMap(arr, fn) {
  return new Promise((resolve) => {
    let results = [];
    let counter = 0;
    function cb(val) {
      results.push(fn(val));
      counter += 1;
      if (counter === arr.length) {
        resolve(results);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      const item = arr.get(i, cb);
    }
  });
}

function asyncReduce(arr, fn, acc) {
  return new Promise((resolve) => {
    let counter = 0;
    function cb(val) {
      acc = fn(acc, val, counter);
      counter += 1;
      if (counter === arr.length) {
        resolve(acc);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      const item = arr.get(i, cb);
    }
  });
}

const arr = new AsyncArray([1, 2, 3]);
// arr.get(1, (item) => console.log(item)); // Existing - Prints 2

asyncMap(arr, (x) => x * 2).then((arr_) => console.log("asyncMap:", arr_));
// Expected result: [2, 4, 6];

asyncReduce(arr, (v, x) => v + x, 100).then((val) =>
  console.log("asyncReduce:", val)
);
// Expected result: 106
