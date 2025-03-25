const add = function(arg1, arg2) {
	return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
	return arg1 - arg2;
};

const sum = function(array) {
  if(array.length == 0){return 0};
	return array.reduce((totalSum, element)=>totalSum+element);
};

const multiply = function(array) {
  return array.reduce((total, element)=>total*element);
};

const power = function(num, pwr) {
	return num ** pwr;
};

const factorial = function(num) {
  let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
