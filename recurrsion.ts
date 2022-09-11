function callerTunes<T extends number>(n: T) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hurrayy");
}

function callerTunesRecursive<T extends number>(n: T) {
  if (n <= 0) {
    console.log("Hurrayy");
    return;
  }
  console.log(n);

  callerTunesRecursive(n - 1);
}

function sumNumsRecursive<T extends number>(n: T, total = 0): number {
  if (n <= 0) {
    return total;
  }

  return sumNumsRecursive(n - 1, total + n);
}
function simplyRecursive<T extends number>(num: T): number {
  if (num === 1) return 1;
  return num + simplyRecursive(num - 1);
}

console.log(simplyRecursive(10));
