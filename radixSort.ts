//To perform radix sort we need 3 helper functions

//1. a function that checks for the digit a given position of a number

function digitChecker(num: number, pos: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

console.log(digitChecker(136789, 5));
