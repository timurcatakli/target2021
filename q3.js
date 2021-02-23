// https://caolan.github.io/async/v3/docs.html#waterfall

myWaterFall(
  [
    function (prev, callback) {
      callback(null, `one Prev: ${prev}`);
    },
    function (prev, callback) {
      // prev now equals 'one'
      callback(null, `three Prev: ${prev}`);
    },
    function (prev, callback) {
      // prev now equals 'three'
      callback(null, `done Prev: ${prev}`);
    },
  ],
  function (err, result) {
    // result now equals 'done'
    if (err) console.error("Error", err);

    if (result) console.log("Success", result); // string
  }
);
