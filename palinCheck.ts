function isPalindrome(x: number): boolean {
  let strNum = x.toString();
  let palinCheck = "";
  let length = strNum.length - 1;

  for (let i = length; i >= 0; i--) {
    palinCheck += strNum[i];
  }

  return parseInt(palinCheck) === x;
}

console.log(isPalindrome(1121));
