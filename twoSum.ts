//Given an array of numbers, return the indexes of two numbers such that they add up to target

function twoSum(nums: number[], target: number) {
  let prevNums: Record<string, number> = {};

  let length = nums.length;
  for (let i = 0; i < length; i++) {
    const currentNum = nums[i];

    const remainder = target - currentNum;
    const checkIndex = prevNums[remainder];

    if (typeof checkIndex === "number") {
      return [checkIndex, i];
    } else {
      prevNums[currentNum] = i;
    }
  }

  return [];
}

console.log(twoSum([9, 1, 2, 8, 6, 7], 14));
