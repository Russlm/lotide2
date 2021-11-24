const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);



//EQ ARRAY
const eqArrays = function(arrayOne, arrayTwo) {
  //accumulator
  let output = false;
  //twin for loops to compare
  for (let components of arrayOne) {
    for (let files of arrayTwo) {
      if (components === files) {
        output = true;
      } else {
        output = false;
      }
    }
  }
  return output
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  // computation done by eqArray.
  output = eqArrays(arrayOne,arrayTwo) 
  //output message
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};


// MIDDLE FUNCTION 

const middle = function (inputArray) {
  let input = inputArray;
  let numOfElements = input.length;
  let output = [];
  if (numOfElements < 3) {
    console.log('lower than 2 elements:', output )
    return output;
  }
  if (numOfElements % 2 === 0) {
    output = [];
    output.push(input[numOfElements/2 - 1]);
    output.push(input[numOfElements/2]);
    console.log(`even amount of elements: ${output}`)
    return output;
  } 
  output = []
  // numOfElements = Math.ceil(numOfElements/2) - 1
  output.push(input[Math.ceil(numOfElements/2) - 1]);
  console.log(`odd amount of elements: ${output}`)
  return output; 
}
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([2,4]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
