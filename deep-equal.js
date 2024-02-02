function deepEqual(input1, input2) {

  // Checks to see if ONE is null
  if (((input1 != null) && input2 == null) || ((input1 == null) && input2 != null)) {
    return (false);
  }

  // Checks to see if BOTH null
  if ((input1 == null) && (input2 == null)) {
    return (true);
  }
  else {
    // Checks if all values inside are the same
    if (typeof (input1) === "object" && typeof (input2) === "object") {
      let obj1 = Object.keys(input1);
      let obj2 = Object.keys(input2);

      // Checks length of obj1 and obj2
      if (obj1.length == obj2.length) {
        for (i = 0; i < obj1.length; i++) {
          if (obj1[i] != obj2[i]) {
            return (false);
          }
        }
      }
      else {
        return (false);
      }
    }
    // Returns the statement if they're NOT an object
    else {
      return (input1 === input2);
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
