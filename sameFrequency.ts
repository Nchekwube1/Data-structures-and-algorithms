// Given two different pair of strings , check if both strings have the same number of different alphabets in the same frequency

function samefrequency(str1: string, str2: string) {
  let strNum1 = str1.toString();
  let strNum2 = str2.toString();
  if (strNum1.length !== strNum2.length) return false;
  interface objType {
    [name: string]: number;
  }
  let str1Obj: objType = {};
  let str2Obj: objType = {};

  for (let i = 0; i < strNum1.length; i++) {
    str1Obj[strNum1[i]] = (str1Obj[strNum1[i]] || 0) + 1;
  }
  for (let i = 0; i < strNum2.length; i++) {
    str2Obj[strNum2[i]] = (str2Obj[strNum2[i]] || 0) + 1;
  }
  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) return false;
  }
  return true;
}

console.log(samefrequency("abna", "anan"));
