
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 7 for [7, 6, 5]", () => {
    assert.deepEqual(head([7, 6, 5]), 7);
  });
  it("returns hello for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

