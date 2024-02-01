//Makes an array from start --> finish
function range(startNum, endNum, stepInput = 1) {
  let outputArray = new Array(Math.abs((startNum - endNum) / stepInput - 1));
  let numAdd = startNum;

  for (i = 0; i < outputArray.length; i++) {
      outputArray[i] = (numAdd);
      numAdd += stepInput;
  }

  return (outputArray);
}

//Takes array, and adds the sum of all numbers inside.
function sum(arrayInput) {
  let sum = 0;
  const inputArray = arrayInput;

  for (i = 0; i < inputArray.length; i++) {
      sum += inputArray[i];
  }

  return (sum);
}

// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
