// Promise Retry Pattern.
function demo(val) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return reject(val || 1000);
    }, 1000);
  });
}

function retryPromise(retries, fn, delay) {
  return new Promise((resolve, reject) => {
    fn("💩💩💩")
      .then((res) => console.log("resolved"))
      .catch((err) => {
        console.log(retries);
        if (retries === 0) {
          return reject(err);
        } else {
          retryPromise(retries - 1, fn, delay);
        }
      });
  });
}

// End User API:
const delay = 2000;
const print = retryPromise(3, demo, delay);

print
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log("💩");
    console.log("Something went wrong", err);
  });
