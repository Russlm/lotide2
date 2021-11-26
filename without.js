const without = function(source, itemsToRemove){
  console.log('source:', source, 'itemstoRemove:', itemsToRemove )
  console.log('splice update')
  //accumulator:
  let output = source;
  //for loops to compare source:
  for (i= 0; i<output.length; i++) {
    //second loop to compare remove
    for (j= 0; j<itemsToRemove.length; j++) {
      //removal logic.
      if (output[i] === itemsToRemove[j]) {
        output.splice(i,1) 
        console.log('Current output', output)
      } 
    }
  }
  console.log ('Final output:', output)
  return output
}












const assertArraysEqual = function(arrayOne, arrayTwo) {
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
  
  //output message
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

let test1 = without([1, 2, 3], [1]) // => [2, 3]
let test2 = without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


console.log(assertArraysEqual(test1, [2,3]))
console.log(assertArraysEqual(test2, ["1", "2"]))