function deepEqual(input1, input2) {

  if (input1 != null && input2 != null) {

    if ((typeof (input1) === "object") && typeof (input2) === "object") {
      if (Object.keys(input1).length === Object.keys(input2)) {
        let part1 = null;
        let part2 = null;

        for (i = 0; i < Object.keys(input1).length; i++) {
          part1 += Object.keys(input1)[i];
        }

        for (i = 0; i < Object.keys(input1).length; i++) {
          part2 += Object.keys(input2)[i];
        }

        if (part1 == part2) {
          return (true)
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

}

// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
