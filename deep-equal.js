function deepEqual(input1, input2) {

  // Checks to see if EITHER are null
  if ((input1 != null) || (input2 != null)) {

    // Checks to see if BOTH null
    if ((input1 == null) && (input2 == null)) {
      return (false);
    }
    else {
      // Checks if all values inside are the same
      if (typeof (input1) == "object" && typeof (input2) == "object") {
        for (let node = input1; node; node.rest) {
          for (let node2 = input2; node2; node2.rest) {
            if (node.value != node2.value) {
              return (false);
            }
          }
        }
      }
      // Returns the statement if they're NOT an object
      else {
        return (input1 === input2);
      }
    }
  }
  // Default statement
  return (true);
}

// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
