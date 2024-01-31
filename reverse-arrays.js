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
// Use .pop()
let tempVal = null;

for (i = arrayInput.length; i > 0; i--) {
  tempVal = arrayInput.pop();
  arrayInput.unshift(tempVal);
}

}

// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]