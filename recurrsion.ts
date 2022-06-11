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

function sumNumsRecursive<T extends number>(n: T, total = 0): any {
  if (n <= 0) {
    return total;
  }

  return sumNumsRecursive(n - 1, total + n);
}

console.log(sumNumsRecursive(5004));
