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

  return result;
}

// console.log(
//   merge2Arrays([1, 10, 50, 62, 89, 105, 200, 345, 998, 11234], [2, 14, 99, 100])
// );

function mergeSort(arr: number[]) {
  let fullLength = arr.length;
  if (fullLength < 2) return arr;

  let halfLength = Math.floor(fullLength / 2);
  let firstHalf: number[] = mergeSort(arr.slice(0, halfLength));
  let secondHalf: number[] = mergeSort(arr.slice(halfLength, fullLength));

  return merge2Arrays(firstHalf, secondHalf);
}

console.log(mergeSort([1, 10, 50, 62, 89, 105, 200, 345, 998, 11234]));
