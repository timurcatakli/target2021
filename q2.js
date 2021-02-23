function promisify(fn) {
    // write here
}

const asyncAdd = (a, b, callback) => {
  const sum = a + b;
  callback(sum);
};

/* API */
const add = promisify(asyncAdd);
add(2, 6).then(
  // after resolve
  (sum) => console.log(sum)
);
