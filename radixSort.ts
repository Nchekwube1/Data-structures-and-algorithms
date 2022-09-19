//To perform radix sort we need 3 helper functions

//1. a function that checks for the digit a given position of a number

function digitChecker(num: number, pos: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

// console.log(digitChecker(136789, 5));

//2. A function that returns the number of digits a number has

function noOfDigits(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(noOfDigits(136789));

//2. A function that returns the largest number of digits an arrsy of number has

function largestNum(numArr: number[]): number {
  let largest = 0;
  for (let i = 0; i < numArr.length; i++) {
    largest = Math.max(largest, noOfDigits(numArr[i]));
  }
  return largest;
}
// console.log(largestNum([136789, 1112232223334455, 12, 3345, 456]));

// Implementing radix sort

function radixSort(input: number[]): number[] {
  let maxDigitCount = largestNum(input);
  for (let i = 0; i < maxDigitCount; i++) {
    let individualBuckets: any = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < input.length; k++) {
      let digit = digitChecker(input[k], i);
      individualBuckets[digit].push(input[k]);
    }
    input = [].concat(...individualBuckets);
  }
  return input;
}

console.log(radixSort([136789, 1112232223334455, 12, 3345, 456]));
