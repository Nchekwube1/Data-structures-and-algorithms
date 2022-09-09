//Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
//There may be more than one pair that matches the average target.

// function averagePair(sortedArr: number[], target: number) {
//   let firstPair = 0;
//   let tempPair = 0;
//   if (sortedArr.length < 2) return false;
//   for (let i = 0; i < 2; i++) {
//     firstPair += sortedArr[i];
//   }
//   tempPair = firstPair;
//   if (firstPair / 2 === target) {
//     console.log(firstPair);

//     return true;
//   } else if (sortedArr.length < 3) {
//     return false;
//   } else {
//     for (let j = 2; j < sortedArr.length; j++) {
//       tempPair = tempPair - sortedArr[j - 2] + sortedArr[j];
//       if (tempPair / 2 === target) {
//         console.log(tempPair);
//         return true;
//       }
//     }
//   }

//   return false;
// }
function averagePair(sortedArr: number[], target: number) {
  let leftEnd = 0;
  let rightEnd = sortedArr.length - 1;

  while (leftEnd < rightEnd) {
    let current = (sortedArr[leftEnd] + sortedArr[rightEnd]) / 2;
    if (current === target) {
      console.log({ current: [sortedArr[leftEnd], sortedArr[rightEnd]] });
      return true;
    } else if (current < target) leftEnd++;
    else rightEnd--;
  }
  return false;
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 32], 2.5));
