'use strict';

// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// Challenge - use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// create regular arrow function
// create arrow function using shorthand syntax

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
