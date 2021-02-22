// Implement an async task runner.

// A "TaskRunner" Constructor takes one argument, "concurrency", and exposes one method
// "push" on its prototype. The "push" method takes one argument "task" which is a
// "function"

// "task" functions that can be passed to the push method have the following signature:
// function exampleTask(done) { /* calls done() at some point */ }

// Passing a task to a push method of a TaskRunner instance should immediately execute
// (call/run/invoke) the task, unless the number of currently running tasks exceeds the
// concurrency limit.

// If the number of tasks exceeds concurrency limit (which is passed to the TaskRunner
// constructor), the pushed task should wait until one of the running tasks has finished
// (has called done).

// taskRunner -> run the task one by one,
// Api, push, -> push the task into current task queue, and run the task queue im

// var r = new TaskRunner(3);
// r.push(exampleSimpleTask); // executes immediately
// r.push(exampleSimpleTask); // executes immediately
// r.push(exampleSimpleTask); // executes immediately
// r.push(exampleSimpleTask); // should wait until one of the running tasks completes
// r.push(exampleSimpleTask); // should wait until one of the running tasks completes

function factory(num) {
  console.log(`Starting Task ${num}`);
  return function exampleSimpleTask(done) {
    console.log("task", "Before " + new Date().getTime());
    setTimeout(() => done(num), 2000);
  };
}

const r = new TaskRunner(3);

// r.push(exampleSimpleTask);
// r.push(exampleSimpleTask);
// r.push(exampleSimpleTask);
// r.push(exampleSimpleTask);

r.push(factory(1));
r.push(factory(2));
r.push(factory(3));
r.push(factory(4));
