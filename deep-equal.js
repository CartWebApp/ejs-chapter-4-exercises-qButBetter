function deepEqual(input1, input2) {

  // Checks to see if any are null
  if (input1 != null && input2 != null) {

    // Sees if they are both an object, otherwise compares with ===
    if ((typeof (input1) === "object") && typeof (input2) === "object") {

      // Checks to see if the array made by Object.keys are the same length
      if (Object.keys(input1).length === Object.keys(input2)) {
        let arr1 = Object.keys(input1);
        let arr2 = Object.keys(input2);

        // Iterates thru the arrays to see if all inside values match up
          for (i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
              return(false);
            }
          }

      }
      else {
        return (false);
      }
    }
    else {
      return (input1 === input2);
    }

  }
  else {
    return (false);
  }

  // Default statement
  return(true);
}

// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
