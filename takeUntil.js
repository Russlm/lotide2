// HELPER FUNCTIONS 
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

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (callback(element)) { 
      return results; 
    } else {
      results.push(element);
    }
  }
  console.log(results)
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1,  [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ "I've", "been", "to", "Hollywood" ])