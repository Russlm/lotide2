const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {  //all items = array, items to count = object
//   let output = {};
//   for (let item of allItems) {
//     console.log(`name being checked: ${item}`);
//     for (let target in itemsToCount) {
//       console.log(`key value pair being compared: ${target}: ${itemsToCount[target]}`);
//       if (itemsToCount[target] === true && item === target){
//         output[item] ++;
//         console.log(`current output: ${output}`);  
//       }
//     }
//   }
//   console.log(output)
// }

const countOnly = function(allItems, itemsToCount) {  //all items = array, items to count = object
  let output = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if(output[item]) {
        output[item] += 1;
      } else {
        output[item]= 1;
      }
    }
    
  }
  return(output)
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined)