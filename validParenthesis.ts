function isValid(s: string): boolean {
  let object: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    console.log({ index: i });
    console.log(`s${i}`, object[s[i]]);

    if (object[s[i]]) {
      console.log({ stack });

      console.log("found==>", s[i], object[s[i]]);
      stack.push(s[i]);
    } else {
      let popped = stack.pop()!!;
      if (object[popped] !== s[i]) {
        console.log({ stack });

        console.log("not found===>", object[popped], s[i]);

        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}

console.log(isValid("{}[]{(})"));
