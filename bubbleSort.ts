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
