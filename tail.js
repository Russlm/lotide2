//HELPER FUNCTIONS
const assertEqual = require("./assertEqual")

//TAIL FN
const tail = function(array) {
  let output = array.slice(1);
  return output;
};

module.exports = tail;

