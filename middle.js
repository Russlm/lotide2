const assertEqual = require('./assertEqual');

//EQ ARRAY
const eqArrays = require('./eqArrays');

const assertArraysEqual = require("./assertArraysEqual");

// MIDDLE FUNCTION

const middle = function(inputArray) {
  let input = inputArray;
  let numOfElements = input.length;
  let middleElement = Math.ceil(numOfElements / 2) - 1;
  let output = [];

  if (numOfElements < 3) {
    console.log('lower than 2 elements:', output);
    return output;
  }
  if (numOfElements % 2 === 0) {
    output.push(input[middleElement]);
    output.push(input[middleElement + 1]);
    console.log(`even amount of elements: ${output}`);
    return output;
  }
  output = [];
  output.push(input[middleElement]);
  console.log(`odd amount of elements: ${output}`);
  return output;
};


module.exports = middle;
