// Promise Retry Pattern.

function demo(val) {
  return new Promise((resolve, reject) => {
      setTimeout(function() {
          return reject(val || 1000);
      }, 1000);
  });
}


function retryPromise(retries, fn, delay) {
}

// End User API:
const delay = 2000;
const print = retryPromise(3, demo, delay);

print.then(function(result) {
    console.log(result);
}).catch(function(err){
    console.error("Something went wrong", err);
});

