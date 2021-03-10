// https://medium.com/@suvechhyabanerjee92/watch-an-object-for-changes-in-vanilla-javascript-a5f1322a4ca5

// these are the methods for the Model:

class Model {
  constructor(props) {
    this.props = Object.assign({}, props);
  }

  get(value) {
    return this.props[value];
  }

  set(prop, value) {
    this.props[prop] = value;
  }

  unset(key) {
    delete this.props[key];
  }

  has(key) {
    return this.props.hasOwnProperty(key);
  }
}

function example() {
  const person = new Model({ name: "Jess", age: 22 });

  //   console.log(person.get('name')); // -> 'Jess'
  //   console.log(person.get('age')); // -> 22

  //   person.set('numberOfCats', undefined);

  //   console.log(person.has('numberOfCats')); // -> true
  //   person.set('numberOfCats', 0);
  //   console.log(person.has('numberOfCats')); // -> true

  //   person.set('numberOfCats', false);
  //   console.log(person.has('numberOfCats')); // -> true

  // note that Model accepts arbitrary properties, not just "name" and "age".
  var company = new Model();
  company.set("employees", 2500);
  company.set("revenue", 5);

  console.log(company.get("employees")); // -> 2500
  console.log(company.get("revenue")); // -> 5
  console.log(company.get("not present")); // -> undefined

  // here are all the methods for the model
  person.set("name", "Bob");
  console.log(person.get("name")); // -> 'Bob'
  console.log(person.has("name")); // -> true
  person.unset("name");
  console.log(person.has("name")); // -> false
}

// example();

function example2() {
  const person = new Model({ name: "Jess", age: 22 });
  // the on method allows us add callbacks for events.
  // Model emits two events for each change:
  // 'change':              emitted on any change
  // 'change:${attribute}': emitted only when "attribute"
  //                        changes.
  // here’s a concrete example:

  person.on("change:name", function (key, oldVal, newVal) {
    // called when any attribute changes
    console.log("attr", key, "changed from", oldVal, "to", newVal);
  });

  person.on("change:name", function (oldVal, newVal) {
    // called only when the "name" attribute changes.
    // note that the signature of this callback is
    // different from the general ’change’ event
    // callback
    console.log("specifically name changed from", oldVal, "to", newVal);
  });

  // multiple handlers for the same event name
  person.on("change:twice", function () {
    console.log("first");
  });
  person.on("change:twice", function () {
    console.log("second");
  }); // [fn, fn]

  person.set("dogs", 2);
  // in console: attr dogs changed from undefined to 2
  person.set("name", "Donut");
  // in console: attr name changed from Jess to Donut
  // in console: specifically name changed from Jess to Donut
  person.unset("name");
  // in console: attr name changed from Donut to undefined
  // in console: specifically name changed from Donut to undefined
  person.set("twice", null);
  // in console: attr twice changed from undefined to null
  // in console: first
  // in console: second
}

example2();
