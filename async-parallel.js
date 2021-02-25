const async = {};
async.parallel = (fnArr, finalCb) => {
  const resultsArr = [];
  let counter = 0;
  fnArr.forEach((fn, index) => {
    fn((err, results) => {
      resultsArr[index] = results;
      counter += 1;
      if (counter === resultsArr.length) {
        finalCb(null, resultsArr);
      }
    });
  });
};

async.parallel(
  [
    function (callback) {
      setTimeout(function () {
        callback(null, "one");
      }, 200);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, "two");
      }, 100);
    },
  ],
  // optional callback
  function (err, results) {
    console.log(results);
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
  }
);
