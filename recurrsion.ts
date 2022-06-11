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

callerTunesRecursive(10);
