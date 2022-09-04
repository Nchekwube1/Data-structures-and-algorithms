//return the max sum of consective array values based on a condition
interface slidingInteface {
  arr: number[];
  val: number;
}
function slidingWindow({ arr, val }: slidingInteface) {
  if (arr.length < val) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < val; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let j = val; j < arr.length; j++) {
    tempSum = tempSum - arr[j - val] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(slidingWindow({ arr: [9, 3, 4, 5, 6, 8, 2, 1], val: 4 }));
