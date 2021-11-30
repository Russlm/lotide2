// const head = require("../head");
// const assertEqual = require("../assertEqual");

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 7 for [7, 6, 5]", () => {
    assert.strictEqual(head([7, 6, 5]), 7);
  });
  it("returns hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
});

