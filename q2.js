function myStringify(obj) {
  if (Array.isArray(obj)) {
    // or obj.constructor === Array
    return (
      "[" +
      obj.map((val) => {
        // We use map here instead of forEach since they return.
        return myStringify(val);
      }) +
      "]"
    );
  } else if (!Array.isArray(obj) && typeof obj == "object") {
    if (obj === null || obj === undefined) return String(obj);

    return (
      "{" +
      Object.keys(obj).map((key, i) => {
        return `"${key}":${myStringify(obj[key])}`;
      }) +
      "}"
    );
  } else if (typeof obj == "number") {
    return obj;
  } else {
    // string
    return `"${obj}"`;
  }
}

// console.log("=== Object ===")
// console.log(myStringify({}));
console.log(myStringify({ x: 5, y: "6" }));
console.log(JSON.stringify({ x: 5, y: "6" }));

// console.log("=== Array ===")
// console.log(myStringify([1,"a"]));
// console.log(JSON.stringify([1,"a"]));
// var input = {
//     "a": 1,
//     "b": 'text',
//     "c": {
//         "x": 1,
//         "y": {
//             "x": 2
//         }
//     },
//     "d": false,
//     "e": null,
//     "f": undefined,
//     "g": [1, "text", {
//         a: 1,
//         b: 2
//     }, null]
// };

// console.log(myStringify(input));
