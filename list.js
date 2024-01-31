function arrayToList(arrayInput) {
  // arrayInput[value]

  // Might have to define length of list
  let listOutput = null;

  for (i = arrayInput.length - 2; i >= 0; i--) {
    listOutput = {value: arrayInput[i], rest: listOutput};
  }

return(listOutput);
}

function listToArray(listInput) {
  // listInput[value]

  // Might have to define length of the array
  let arrayOutput = Object.keys[listInput];

  return (arrayOutput);
}

function prepend(listInput, num) {

for (i = 0; i < listInput.length; i++) {

}

}

function nth () {
  
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

// tests
// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
console.log(listToArray(list));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
