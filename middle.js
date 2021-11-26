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
  //assume that they are the same. 
  if (arrayOne.length !== arrayTwo.length) { //if array lengths are different, then they cant be the same.
    return false;
  }
  //twin for loops to compare
  for (i = 0; i < arrayOne.length; i ++) { //checking first array.
    // console.log("components:" , components)
    //   console.log(`file: ${files}`)
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    
  }
  return true; 
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
