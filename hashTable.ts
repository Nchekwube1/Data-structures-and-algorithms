// For hash tables implementation, we first start with creating a hashing function where we pass in the string we want to hash
// and then the meximum number of "buckets" we are using to store in our hash table

const hash = (val: string, max: number) => {
  let hashed = 0;
  for (let i = 0; i < val.length; i++) {
    hashed += val.charCodeAt(i);
  }

  return hashed % max;
};
