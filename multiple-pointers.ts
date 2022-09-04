function sumZero(item: number[]) {
  let left = 0;
  let right = item.length - 1;
  while (left < right) {
    let sum = item[left] + item[right];
    if (sum === 0) {
      return [left, right];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]));
