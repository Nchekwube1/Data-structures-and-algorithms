// Bubble sorting performs sorting on a given array of numbers by comparing the two numbers adjacent to each other in the array and moving
// the lower one to the left hand side, doing this continously till the array has been sorted completely in an ascending order from left to right

//Perform bubble sorting on the given array of numbers and order them from least to highest
let inputArr = [24, 9, 2, 0, 4, 345, 297];
const len = inputArr.length;
let swapped;

let bubbleSort = (inputArr: number[]) => {
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        // console.log(inputArr);

        swapped = true;
      }
    }
  } while (swapped);
  console.log(inputArr);
};
bubbleSort(inputArr);
