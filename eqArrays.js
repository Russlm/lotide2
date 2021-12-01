const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {
  //accumulator
  //assume that they are the same.
  if (arrayOne.length !== arrayTwo.length) { //if array lengths are different, then they cant be the same.
    return false;
  }
  //twin for loops to compare
  for (let i = 0; i < arrayOne.length; i ++) { //checking first array.
    // console.log("components:" , components)
    //   console.log(`file: ${files}`)
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
    
  }
  return true;
};

module.exports = eqArrays;


// const assertEqual = function(actual, expected ){
//   if (actual === expected){
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   } else {
//     console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`)
//   }
//   };

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
