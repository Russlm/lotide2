// const assertEqual = require("../assertEqual");

// const tail= require("../tail");

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2:
// const result2 = tail(["Experiment", "detonation", "Labs"]);
// assertEqual(result2.length, 2); // ensure we get back two elements
// assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result2[1], "Labs"); // ensure second element is "Labs"


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });
  it("returns Lighthouse, Labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  // it("returns [] for [1]", () => {
  //   assert.strictEqual(middle([1]), []);
  // });
});