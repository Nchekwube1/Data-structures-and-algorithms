const swap = (arrayInstance: number[], a: number, b: number) => {
  let temp = arrayInstance[a];
  (arrayInstance[a] = arrayInstance[b]), (arrayInstance[b] = temp);
};
const maxHeapify = (
  arrayInstance: number[],
  arrayLength: number,
  index: number
) => {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  console.log({ largest, left, right });

  while (left <= arrayLength && arrayInstance[left] > arrayInstance[largest]) {
    largest = left;
  }
  while (
    right <= arrayLength &&
    arrayInstance[right] > arrayInstance[largest]
  ) {
    largest = right;
  }
  console.log({ largestAfter: largest });

  if (largest !== index) {
    swap(arrayInstance, largest, index);
    maxHeapify(arrayInstance, arrayLength, largest);
  }
};

const makeMaxHeap = () => {
  const arr: number[] = [15, 17, 20, 1, 5, 10, 30];
  const length = arr.length;
  const maxNonLeaf = Math.floor(length / 2) - 1;

  for (let i = maxNonLeaf; i >= 0; i--) {
    console.log({ i });

    maxHeapify(arr, length, i);
  }

  console.log({ arr });
};

makeMaxHeap();

// non leaf from 0 -  Math.floor(length / 2) - 1
// leaf from  Math.floor(length / 2)  to n
