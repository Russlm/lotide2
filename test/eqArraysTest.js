const eqArrays = require('../eqArrays');

const assertEqual = require('../assertEqual');


assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true); // => true
assertEqual((eqArrays([1, 2, 3], [1, 3, 3])), false); // => false

assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true); // => true
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false); // => false