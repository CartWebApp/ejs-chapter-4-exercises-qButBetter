function reverseArray(arrayInput) {
  let arrayOutput = new Array(arrayInput.length);
  let tempVal = arrayInput[arrayInput.length - 1];

  for (i = 0; i < arrayInput.length; i++) {
    arrayOutput[i] = tempVal;
    tempVal = arrayInput[arrayInput.length - (i + 2)];
  }

  return (arrayOutput);
}

function reverseArrayInPlace(arrayInput) {
  let tempVal = arrayInput[0];
  let tempVal2 = arrayInput[arrayInput.length - 1];

  for (i = arrayInput.length; i > 0; i--) {
    arrayInput[i] = tempVal;
    tempVal = arrayInput[i + 1];
  }

  return (arrayInput);
}

// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]