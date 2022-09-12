//Given an array of numbers, return the indexes of two numbers such that they add up to target

function twoSum(inputs: number[], target: number) {
  let prevNums: Record<string, number> = {};

  let length = inputs.length;
  for (let i = 0; i < length; i++) {
    const currentNum = inputs[i];

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

console.log(twoSum([9, 1, 2, 5, 6, 7], 10));
