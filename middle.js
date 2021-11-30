const assertEqual = require('./assertEqual')

//EQ ARRAY
const eqArrays = require('./eqArrays');

const assertArraysEqual = require("./assertArraysEqual");

// MIDDLE FUNCTION 

const middle = function (inputArray) {
  let input = inputArray;
  let numOfElements = input.length;
  let middleElement = Math.ceil(numOfElements/2) - 1
  let output = [];

  if (numOfElements < 3) {
    console.log('lower than 2 elements:', output)
    return output;
  }
  if (numOfElements % 2 === 0) {
    output.push(input[middleElement]);
    output.push(input[middleElement + 1]);
    console.log(`even amount of elements: ${output}`)
    return output;
  } 
  output = []
  output.push(input[middleElement]);
  console.log(`odd amount of elements: ${output}`)
  return output; 
}
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([2,4]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual([],[])

module.exports = middle;
