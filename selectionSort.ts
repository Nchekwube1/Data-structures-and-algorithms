//Perform selection sorting on the given array of numbers and order them from least to highest

let initialArray = [24, 9, 2, 0, 4, 345, 297];
const arrLength = initialArray.length;
for (let i = 0; i < arrLength; i++) {
  let minNumber = i;
  for (let j = i + 1; j < arrLength; j++) {
    if (initialArray[j] < initialArray[minNumber]) {
      minNumber = j;
    }
  }

  if (minNumber !== i) {
    let tempNumber = initialArray[i];
    initialArray[i] = initialArray[minNumber];
    initialArray[minNumber] = tempNumber;
  }
}
console.log(initialArray);
