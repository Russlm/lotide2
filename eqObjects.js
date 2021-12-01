// HELPER FUNCTIONS 
const assertEqual = function(actual, expected ){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`)
  }
  };

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

// ACTUAL CODE 

const eqObjects = function(object1, object2) {
  //accumulator
  let output = false;
  //twin for loops to compare
  for (let keys1 in object1) {
    //console.log('current objectOne key being tested:', keys1)
    for (let keys2 in object2) {
      //console.log('current objectTwo key being tested:', keys2)
      //check and see if keys match 
      if (keys1 === keys2) {
        //check and see if either value is an array.
        //console.log('both keys match.', keys1, keys2) 
        if (Array.isArray(object1[keys1]) || Array.isArray(object2[keys2])) {
          //test arrays. 
          if (eqArrays(object1[keys1], object2[keys2])){
            output = true;
            //console.log('both arrays match', output)
            break;
          } else {
            output = false 
            //console.log('both arrays dont match', output)
          }
        } else if (object1[keys1] === object2[keys2]) {
              output = true;
              break;
            } else {
              output = false;
              break;
            }
      } else {
        output = false;
      }
      //console.log('comparison says:', output)
    }
  }
  //console.log(output)
  return output
};

// TEST CODE 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba),true));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
; // => true
console.log(assertEqual(eqObjects(cd, dc),true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("test 3 results")
console.log(assertEqual(eqObjects(cd, cd2),false));// => false