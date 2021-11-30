const assertEqual = require('../assertEqual');

//EQ ARRAY
const eqArrays = require('../eqArrays');

const assertArraysEqual = require("../assertArraysEqual");

const middle = require('../middleTest');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([2,4]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual([],[])