function arrayToList(arrayInput) {
  // arrayInput[value]

  let listOutput = null;

  for (i = arrayInput.length - 1; i >= 0; i--) {
    listOutput = { value: arrayInput[i], rest: listOutput };
  }

  return (listOutput);
}

function listToArray(listInput) {
  // listInput[value]

  // Might have to define length of the array
  let arrayOutput = [];
  const objList = listInput;

  for (let node = objList; node; node = node.rest) {
    arrayOutput.push(node.value);
  }

  return (arrayOutput);
}

function prepend(element, listInput) {
  let listPart1 = { value: element, rest: listInput };

  return (listPart1);
}

function nth(listInput, num) {
  let arr = listToArray(listInput);
  let counter = 0;

  for (i = 0; i < arr.length; i++) {
    if (i == num) {
      return (arr[i]);
    }
  }
  return;
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
}

// tests
console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}


// Fix this one
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
