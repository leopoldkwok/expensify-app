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

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));