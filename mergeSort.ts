// Write a function to merge 2 arrays, both arrays must be sorted in the same direction
function merge2Arrays(arr1: number[], arr2: number[]) {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;
  let length1 = arr1.length;
  let length2 = arr2.length;

  while (pointer1 < length1 && pointer2 < length2) {
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }
  while (pointer2 < length2) {
    result.push(arr2[pointer2]);
    pointer2++;
  }
  while (pointer1 < length1) {
    result.push(arr1[pointer1]);
    pointer1++;
  }
  //   if (pointer1 === length1 - 1 && pointer2 === length2 - 1) {
  //     return result;
  //   } else if (pointer1 < length1 - 1) {
  //     while (pointer1 < length1) {
  //       result.push(arr1[pointer1]);
  //       pointer1++;
  //     }
  //     return result;
  //   } else {
  //     while (pointer2 < length2) {
  //       result.push(arr2[pointer2]);
  //       pointer2++;
  //     }
  //     return result;
  //   }

  return result;
}

console.log(
  merge2Arrays([1, 10, 50, 62, 89, 105, 200, 345, 998, 11234], [2, 14, 99, 100])
);
