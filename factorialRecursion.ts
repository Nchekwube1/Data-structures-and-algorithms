function factorial<T extends number>(num: T): number {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));
