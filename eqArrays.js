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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false



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
