function deepEqual(input1, input2) {

  if (input1 != null && input2 != null) {

      // if (input1 === input2) {
      //     return (true);
      // }
      // else if (typeof (input1) == "object" && typeof (input2) == "object") {
      //     return (true);
      // }
      // else {
      //     return (false);
      // }

      if ((typeof(input1) === "object") && typeof(input2) === "object") {
          // Something with Object.keys
      }

  }

}

// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
