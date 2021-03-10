function A() {
  this.firstName = "Foo";
}

A.prototype.print = function () {
  console.log(this.firstName, this.lastName);
};

function B() {
  Object.getPrototypeOf(B.prototype).constructor.call(this); // super()
  this.lastName = "Bar";
}

// Class B Extends A connection
B.prototype = Object.create(A.prototype);
// Homework: Knowing the difference between New vs Object.create

// class A {
//   constructor() {
//     this.firstName = "Foo"
//   }

//   print() {
//     console.log(this.firstName , this.lastName)
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//     this.lastName = "Bar"
//   }
// }

let a = new A();
let b = new B();
b.print();
console.log(b); // __proto__: {}
