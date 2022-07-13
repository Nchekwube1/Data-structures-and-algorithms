function findMaxNumInWindow<T extends number>(nums: T[], windowSize: T) {
  let maxNumsArr: T[] = [];
  if (nums.length === 0) {
    return maxNumsArr;
  }
  if (windowSize > nums.length) {
    windowSize = nums.length as T;
  }

  let currentWindow: T[] = [];

  for (let i = 0; i < windowSize; i++) {
    while (
      currentWindow.length > 0 &&
      nums[i] >= nums[currentWindow[currentWindow.length - 1]]
    ) {
      currentWindow.pop();
    }
    currentWindow.push(i as T);
  }

  for (let i = windowSize; i < nums.length; i++) {
    while (
      currentWindow.length > 0 &&
      nums[i] >= nums[currentWindow[currentWindow.length - 1]]
    ) {
      currentWindow.pop();
    }

    if (currentWindow.length > 0 && currentWindow[0] <= i - windowSize) {
      currentWindow.shift();
    }
    currentWindow.push(i);
    maxNumsArr.push(nums[currentWindow[0]]);
  }

  return maxNumsArr;

  // maxNumsArr.push(nums[currentWindow[0]])
}

console.log(findMaxNumInWindow([4, 1, 3, 2, 12], 2));
