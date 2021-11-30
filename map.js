//HELPER FUNCTIONS 

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

// ACTUAL FUNCTION 



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const result1 = map(words, word => word[0]);
console.log(result1);

