//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL CODE
const findKeyByValue = function(testedObject, queriedString) {
  //accum
  let output = '';

  //search function
  for (let keys in testedObject) {
    if (testedObject[keys] === queriedString) {
      output = `${keys}`;
      break;
    }
  }
  return output;
};


//TEST CODE

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  musical: "Hamilton",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Hamilton"), "musical");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);