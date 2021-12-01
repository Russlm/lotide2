// const assertEqual = require('../assertEqual');

// //EQ ARRAY
// const eqArrays = require('../eqArrays');

// const assertArraysEqual = require("../assertArraysEqual");

// const middle = require('../middle');

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([2,4]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual([],[])


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns hello for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  // it("returns [] for [1]", () => {
  //   assert.strictEqual(middle([1]), []);
  // });
});
