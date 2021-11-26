//EQ ARRAY
const eqArrays = function(arrayOne, arrayTwo) {
  //accumulator
  //assume that they are the same. 
  if (arrayOne.length !== arrayTwo.length) { //if array lengths are different, then they cant be the same.
    return false;
  }
  //twin for loops to compare
  for (let components of arrayOne) { //checking first array.
    for (let files of arrayTwo) {
      if (components !== files) {
        return false;
      }
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
