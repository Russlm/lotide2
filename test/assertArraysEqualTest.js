const assertArraysEqual = require("../assertArraysEqual");

const eqArrays = require("../eqArrays");

console.log(assertArraysEqual([8, 2, 4], [8, 2, 4])) // => true
console.log(assertArraysEqual([1, 2, 3], [9, 2, 1])) // => false
