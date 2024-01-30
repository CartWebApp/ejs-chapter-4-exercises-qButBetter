function arrayToList(arrayInput) {
  // arrayInput[value]

  // Might have to define length of list
  let listOutput = {};

for (i = arrayInput.length; i > 0; i--) {

}


}

function listToArray(listInput, arr) {
  // listInput[value]

  // Might have to define length of the array
  let arrayOutput = [];

  let iterator = 0;
  while (listInput[value] != null) {
      arrayOutput[iterator] = listInput[value]
      iterator++;
  }

  return(arrayOutput);
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
